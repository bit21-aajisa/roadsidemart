document.querySelector('.search-btn').addEventListener('click', function() {
  const query = document.querySelector('.search-bar').value.toLowerCase();
  const products = document.querySelectorAll('.product-card');

  products.forEach(product => {
      const title = product.querySelector('.product-title').textContent.toLowerCase();
      if (title.includes(query)) {
          product.style.display = 'block';
      } else {
          product.style.display = 'none';
      }
  });
});

function addToCart(name, price) {
  // Remove any commas from price and convert to a number
  const cleanPrice = parseFloat(price.replace(/,/g, ''));
  
  // Retrieve existing cart items or create an empty array if none
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Create a new item object
  const item = { name: name, price: price, quantity: 1 };

  // Add item to cart
  cartItems.push(item);

  // Store updated cart in localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Show confirmation message
  alert("Item added to cart!");
}

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
  button.addEventListener('click', (event) => {
    const productCard = event.target.closest('.product-card');
    const message = document.createElement('div');
    message.classList.add('cart-message');
    message.textContent = 'Item added to cart!';

    productCard.appendChild(message);

    setTimeout(() => {
      message.remove();
    }, 3000); // Message disappears after 2 seconds
  });
});
function sortProducts(criteria) {
  const productGrid = document.querySelector('.product-grid');
  const products = Array.from(productGrid.children);

  products.sort((a, b) => {
    if (criteria === 'alphabetical') {
      return a.querySelector('.product-title').textContent.localeCompare(b.querySelector('.product-title').textContent);
    } else if (criteria === 'price') {
      const priceA = parseFloat(a.querySelector('.product-price').textContent.replace('MWK', '').replace(',', ''));
      const priceB = parseFloat(b.querySelector('.product-price').textContent.replace('MWK', '').replace(',', ''));
      return priceA - priceB;
    }
  });

  productGrid.innerHTML = '';
  products.forEach(product => productGrid.appendChild(product));
}

document.querySelector('.search-btn').addEventListener('click', function() {
  const query = document.querySelector('.search-bar').value.toLowerCase();
  const products = document.querySelectorAll('.product-card');

  products.forEach(product => {
      const title = product.querySelector('.product-title').textContent.toLowerCase();
      if (title.includes(query)) {
          product.style.display = 'block';
      } else {
          product.style.display = 'none';
      }
  });
});

// Notification Rotation
let notifications = ["< Malawi's Favorite Local Store! >", "< Free Shipping On Orders Over MWK100,000 >", "< Get Up to 50% Off On Your Selected Items! >"];
let notificationIndex = 0;
const notificationText = document.getElementById("notificationText");

setInterval(() => {
  notificationIndex = (notificationIndex + 1) % notifications.length;
  notificationText.textContent = notifications[notificationIndex];
}, 3000);

// Hamburger Menu Toggle
const hamburgerMenu = document.getElementById("hamburgerMenu");
const offsideMenu = document.getElementById("offsideMenu");
const closeBtn = document.getElementById("closeBtn");

hamburgerMenu.addEventListener("click", () => {
  offsideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  offsideMenu.style.display = "none";
}); 
// Show the pop-up on page load
window.addEventListener('load', function() {
  document.getElementById('popup').style.display = 'flex';
});

// Close the pop-up when the close button is clicked
document.getElementById('popupClose').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});

// Optional: Close the pop-up when clicking outside the content area
window.addEventListener('click', function(event) {
  if (event.target === document.getElementById('popup')) {
    document.getElementById('popup').style.display = 'none';
  }
});
