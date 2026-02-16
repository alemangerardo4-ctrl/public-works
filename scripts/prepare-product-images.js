const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
const productsDir = path.join(__dirname, '../public/products');
const heroDir = path.join(__dirname, '../public/hero');

// Create directories
[productsDir, heroDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Known product/shelf images from the existing code
const productImages = [
  '06d3ceec-01fe-4177-97ea-46780c6b3476.jpg', // Shelf in use
  'b78328c2-fda7-4864-815e-e11c3c0facf8.jpg', // Upcycled materials
];

// Hero images from existing code
const heroImages = [
  '797131f7-61b2-4a8f-a8bd-dae8e98d669e.jpg',
  '7fa69f80-3828-4f3e-bef8-95891c95174f.jpg',
  'd9e8add9-da50-459d-b0e0-1561db397a71.jpg',
  '920724cd-3248-4bad-a94f-b7903d600e58.jpg',
];

async function prepareImages() {
  console.log('Preparing product and hero images...\n');
  
  // Resize product images to 1200x900
  for (const file of productImages) {
    try {
      const inputPath = path.join(imagesDir, file);
      const outputPath = path.join(productsDir, file);
      
      if (fs.existsSync(inputPath)) {
        await sharp(inputPath)
          .resize(1200, 900, {
            fit: 'cover',
            position: 'center'
          })
          .jpeg({ quality: 90 })
          .toFile(outputPath);
        console.log(`✅ Product image: ${file} → 1200x900px`);
      }
    } catch (err) {
      console.error(`Error processing product ${file}:`, err.message);
    }
  }
  
  // Resize hero images to full-screen (2560x1440 for high-res displays)
  for (const file of heroImages) {
    try {
      const inputPath = path.join(imagesDir, file);
      const outputPath = path.join(heroDir, file);
      
      if (fs.existsSync(inputPath)) {
        await sharp(inputPath)
          .resize(2560, 1440, {
            fit: 'cover',
            position: 'center'
          })
          .jpeg({ quality: 85 })
          .toFile(outputPath);
        console.log(`✅ Hero image: ${file} → 2560x1440px`);
      }
    } catch (err) {
      console.error(`Error processing hero ${file}:`, err.message);
    }
  }
  
  console.log('\n✅ Product and hero images prepared!');
}

prepareImages();
