// Quantity buttons
const quantityInput = document.getElementById('quantity');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');

// Increase quantity
increaseBtn.addEventListener('click', () => {
  quantityInput.value = parseInt(quantityInput.value) + 1;
});

// Decrease quantity
decreaseBtn.addEventListener('click', () => {
  if (parseInt(quantityInput.value) > 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }
});

// Add to Cart alert
document.getElementById('add-to-cart').addEventListener('click', () => {
  const quantity = quantityInput.value;
  alert(`Added ${quantity} item(s) to your cart!`);
});

//upload

