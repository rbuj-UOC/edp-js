// First basic example ---------------------------------------------------------

// Create a custom event.
const myCustomEvent = new CustomEvent('myEvent', {
  detail: { message: 'This is my custom event!' },
})

// Listen and handle the custom event.
document.addEventListener('myEvent', function (e) {
  console.log('Event received:', e.detail.message)
})

// Dispatch the event.
document.dispatchEvent(myCustomEvent)

// Shopping cart example -------------------------------------------------------

// Listen for clicks on the "Add to cart" buttons.
document.querySelectorAll('.product .add').forEach((button) => {
  button.addEventListener('click', function () {
    // Get the product ID and description from data attributes.
    const productId = this.getAttribute('data-product-id')
    const productDescription = this.getAttribute('data-product-description')
    // Create a custom event with the product ID and description.
    const event = new CustomEvent('addToCart', { detail: { productId, productDescription } })
    // Dispatch the event.
    document.dispatchEvent(event)
  })
})

// Listen and handle the custom event.
document.addEventListener('addToCart', function (e) {
  const cartItem = document.createElement('li')
  cartItem.textContent = e.detail.productDescription
  document.getElementById('cart-items').appendChild(cartItem)
  console.log('Product added to cart:', e.detail.productId, e.detail.productDescription)
})
