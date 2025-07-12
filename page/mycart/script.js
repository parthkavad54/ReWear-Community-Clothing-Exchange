
  let cart = [];

  // DOM elements
  const cartSidebar = document.getElementById('cartSidebar');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartToggle = document.getElementById('cartToggle');
  const closeCart = document.getElementById('closeCart');
  const cartItemsContainer = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');

  // Toggle sidebar
  cartToggle.addEventListener('click', () => {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
  });

  closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
  });

  cartOverlay.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
  });

  // Function to add item to cart
  function addToCart(item) {
    const existingItem = cart.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    updateCartUI();
  }

  // Update cart display
  function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    let count = 0;

    cart.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.classList.add('cart-item');
      itemEl.innerHTML = `
        <p>${item.name} x${item.quantity}</p>
        <p>$${(item.price * item.quantity).toFixed(2)}</p>
      `;
      cartItemsContainer.appendChild(itemEl);

      total += item.price * item.quantity;
      count += item.quantity;
    });

    cartCount.textContent = count;
    cartTotal.textContent = total.toFixed(2);
  }

  // Example: add this to buttons on product cards
  // Simulate add-to-cart
  // You can call this function from anywhere
  // addToCart({ id: 1, name: "T-shirt", price: 20 });

