'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { shopifyFetch } from '@/lib/shopify';

export default function ProductPage({ params }) {
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedFinish, setSelectedFinish] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      const query = `
        query getProduct($handle: String!) {
          productByHandle(handle: $handle) {
            id
            title
            description
            descriptionHtml
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 10) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            variants(first: 50) {
              edges {
                node {
                  id
                  title
                  priceV2 {
                    amount
                    currencyCode
                  }
                  selectedOptions {
                    name
                    value
                  }
                  availableForSale
                }
              }
            }
          }
        }
      `;

      const response = await shopifyFetch(query, { handle: params.handle });
      const productData = response.data.productByHandle;
      
      setProduct(productData);
      
      // Extract unique sizes and finishes
      const variants = productData.variants.edges.map(e => e.node);
      const sizes = [...new Set(variants.map(v => v.selectedOptions.find(o => o.name === 'Size')?.value))];
      const finishes = [...new Set(variants.map(v => v.selectedOptions.find(o => o.name === 'Finish')?.value))];
      
      // Set defaults
      setSelectedSize(sizes[0]);
      setSelectedFinish(finishes[0]);
      
      // Find matching variant
      const defaultVariant = variants.find(v => 
        v.selectedOptions.find(o => o.name === 'Size')?.value === sizes[0] &&
        v.selectedOptions.find(o => o.name === 'Finish')?.value === finishes[0]
      );
      setSelectedVariant(defaultVariant);
      
      setLoading(false);
    }

    loadProduct();
  }, [params.handle]);

  useEffect(() => {
    if (!product || !selectedSize || !selectedFinish) return;
    
    const variants = product.variants.edges.map(e => e.node);
    const variant = variants.find(v => 
      v.selectedOptions.find(o => o.name === 'Size')?.value === selectedSize &&
      v.selectedOptions.find(o => o.name === 'Finish')?.value === selectedFinish
    );
    setSelectedVariant(variant);
  }, [selectedSize, selectedFinish, product]);

  async function addToCart() {
    if (!selectedVariant) return;

    const checkoutQuery = `
      mutation checkoutCreate($input: CheckoutCreateInput!) {
        checkoutCreate(input: $input) {
          checkout {
            webUrl
          }
        }
      }
    `;

    const response = await shopifyFetch(checkoutQuery, {
      input: {
        lineItems: [{ variantId: selectedVariant.id, quantity: 1 }]
      }
    });

    window.location.href = response.data.checkoutCreate.checkout.webUrl;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F5F1] flex items-center justify-center">
        <div className="text-[#2C3E50] text-xl">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F5F5F1] flex items-center justify-center">
        <div className="text-[#2C3E50] text-xl">Product not found</div>
      </div>
    );
  }

  const variants = product.variants.edges.map(e => e.node);
  const sizes = [...new Set(variants.map(v => v.selectedOptions.find(o => o.name === 'Size')?.value))];
  const finishes = [...new Set(variants.map(v => v.selectedOptions.find(o => o.name === 'Finish')?.value))];

  return (
    <div className="min-h-screen bg-[#F5F5F1]">
      {/* Hero Section */}
      <div className="bg-[#2C3E50] text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a href="/products" className="text-[#8B9E7D] hover:text-[#E87A3E] transition-colors text-sm mb-4 inline-block">
              ← Back to Products
            </a>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">{product.title}</h1>
            <p className="text-xl text-[#D4A574]">
              ${selectedVariant?.priceV2.amount} • Made to Order • Ships in 5-7 days
            </p>
          </motion.div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              {product.images.edges[0] ? (
                <img
                  src={product.images.edges[0].node.url}
                  alt={product.images.edges[0].node.altText || product.title}
                  className="w-full h-auto rounded"
                />
              ) : (
                <div className="w-full aspect-square bg-gradient-to-br from-[#8B9E7D] to-[#2C3E50] rounded flex items-center justify-center">
                  <p className="text-white text-2xl font-bold">Product Image</p>
                </div>
              )}
              
              {/* Thumbnail grid if multiple images */}
              {product.images.edges.length > 1 && (
                <div className="grid grid-cols-4 gap-2 mt-4">
                  {product.images.edges.slice(1, 5).map((edge, i) => (
                    <img
                      key={i}
                      src={edge.node.url}
                      alt={edge.node.altText}
                      className="w-full aspect-square object-cover rounded cursor-pointer hover:opacity-75 transition-opacity"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Transparent Pricing Callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 bg-[#E87A3E] text-white p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
              {selectedSize === 'Small' ? (
                <div className="space-y-1 text-sm">
                  <p>Material + CNC cutting: <strong>$112</strong></p>
                  <p>Powder coating: <strong>$24</strong></p>
                  <p>Our margin: <strong>$39</strong></p>
                  <p className="pt-2 border-t border-white/30 text-lg font-bold">
                    Your price: $175
                  </p>
                </div>
              ) : (
                <div className="space-y-1 text-sm">
                  <p>Material + CNC cutting: <strong>$185</strong></p>
                  <p>Powder coating: <strong>$38</strong></p>
                  <p>Our margin: <strong>$52</strong></p>
                  <p className="pt-2 border-t border-white/30 text-lg font-bold">
                    Your price: $275
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Right: Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Size Selector */}
            <div className="mb-6">
              <label className="block text-[#2C3E50] font-bold mb-3 text-sm uppercase tracking-wider">
                Size
              </label>
              <div className="flex gap-3">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                      selectedSize === size
                        ? 'bg-[#2C3E50] text-white shadow-lg scale-105'
                        : 'bg-white text-[#2C3E50] hover:bg-[#8B9E7D] hover:text-white'
                    }`}
                  >
                    {size}
                    <span className="block text-xs mt-1 opacity-75">
                      {size === 'Small' ? '30" × 7"' : '48" × 10"'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Finish Selector */}
            <div className="mb-8">
              <label className="block text-[#2C3E50] font-bold mb-3 text-sm uppercase tracking-wider">
                Finish ({finishes.length} options)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {finishes.map(finish => (
                  <button
                    key={finish}
                    onClick={() => setSelectedFinish(finish)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedFinish === finish
                        ? 'bg-[#E87A3E] text-white shadow-lg scale-105'
                        : 'bg-white text-[#2C3E50] hover:bg-[#D4A574] hover:text-white'
                    }`}
                  >
                    {finish}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={addToCart}
              disabled={!selectedVariant?.availableForSale}
              className="w-full bg-[#2C3E50] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#E87A3E] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
            >
              {selectedVariant?.availableForSale ? 'Add to Cart — $' + selectedVariant.priceV2.amount : 'Out of Stock'}
            </button>

            {/* Product Description */}
            <div 
              className="mt-8 prose prose-lg max-w-none text-[#2C3E50]"
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />

            {/* Trust Badges */}
            <div className="mt-8 grid grid-cols-3 gap-4 pt-8 border-t border-[#8B9E7D]/30">
              <div className="text-center">
                <div className="text-3xl mb-2">♻️</div>
                <p className="text-xs text-[#2C3E50] font-semibold">Recyclable Aluminum</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔧</div>
                <p className="text-xs text-[#2C3E50] font-semibold">Made to Order</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📐</div>
                <p className="text-xs text-[#2C3E50] font-semibold">CNC Precision</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
