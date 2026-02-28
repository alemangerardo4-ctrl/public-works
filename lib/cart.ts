// Simple cart management with localStorage
// Can be upgraded to Shopify Buy SDK later

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  variant?: string
  image?: string
}

export interface Cart {
  items: CartItem[]
  total: number
}

// Get cart from localStorage
export function getCart(): Cart {
  if (typeof window === 'undefined') {
    return { items: [], total: 0 }
  }
  
  const cartData = localStorage.getItem('publicworks_cart')
  if (!cartData) {
    return { items: [], total: 0 }
  }
  
  try {
    return JSON.parse(cartData)
  } catch {
    return { items: [], total: 0 }
  }
}

// Save cart to localStorage
export function saveCart(cart: Cart): void {
  if (typeof window === 'undefined') return
  localStorage.setItem('publicworks_cart', JSON.stringify(cart))
}

// Add item to cart
export function addToCart(item: Omit<CartItem, 'quantity'>, quantity: number = 1): Cart {
  const cart = getCart()
  
  // Check if item already exists
  const existingIndex = cart.items.findIndex(
    i => i.id === item.id && i.variant === item.variant
  )
  
  if (existingIndex >= 0) {
    cart.items[existingIndex].quantity += quantity
  } else {
    cart.items.push({ ...item, quantity })
  }
  
  cart.total = calculateTotal(cart.items)
  saveCart(cart)
  
  return cart
}

// Remove item from cart
export function removeFromCart(itemId: string, variant?: string): Cart {
  const cart = getCart()
  cart.items = cart.items.filter(
    item => !(item.id === itemId && item.variant === variant)
  )
  cart.total = calculateTotal(cart.items)
  saveCart(cart)
  return cart
}

// Update item quantity
export function updateQuantity(itemId: string, quantity: number, variant?: string): Cart {
  const cart = getCart()
  const itemIndex = cart.items.findIndex(
    i => i.id === itemId && i.variant === variant
  )
  
  if (itemIndex >= 0) {
    if (quantity <= 0) {
      cart.items.splice(itemIndex, 1)
    } else {
      cart.items[itemIndex].quantity = quantity
    }
  }
  
  cart.total = calculateTotal(cart.items)
  saveCart(cart)
  return cart
}

// Clear cart
export function clearCart(): Cart {
  const emptyCart: Cart = { items: [], total: 0 }
  saveCart(emptyCart)
  return emptyCart
}

// Calculate cart total
function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
}

// Get cart item count
export function getCartItemCount(): number {
  const cart = getCart()
  return cart.items.reduce((sum, item) => sum + item.quantity, 0)
}
