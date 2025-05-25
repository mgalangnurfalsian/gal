// DOM Elements
const searchForm = document.querySelector('.search-form');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const quickActions = document.querySelectorAll('.action-item');
const gameItems = document.querySelectorAll('.game-item');
const viewAllButtons = document.querySelectorAll('.view-all');

// Carousel Automation
let currentSlide = 0;
const carouselInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  carouselSlides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % carouselSlides.length;
  carouselSlides[currentSlide].classList.add('active');
}

// Pause carousel on hover
document.querySelector('.featured-carousel').addEventListener('mouseenter', () => {
  clearInterval(carouselInterval);
});

document.querySelector('.featured-carousel').addEventListener('mouseleave', () => {
  carouselInterval = setInterval(nextSlide, 5000);
});

// Search Functionality
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = document.querySelector('.search-input').value;
  if (searchTerm.length > 2) {
    // Implement search logic here
    alert(`Searching for: ${searchTerm}`);
    searchForm.reset();
  }
});

// Quick Actions Handlers
quickActions.forEach(action => {
  action.addEventListener('click', () => {
    const actionText = action.querySelector('.action-text').textContent;
    alert(`Memilih: ${actionText}`);
  });
});

// Game Items Interaction
gameItems.forEach(game => {
  game.addEventListener('click', () => {
    const gameName = game.querySelector('.game-name').textContent;
    alert(`Membuka halaman ${gameName}`);
  });
});

// View All Functionality
viewAllButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const category = button.previousElementSibling.textContent;
    alert(`Menampilkan semua item untuk kategori: ${category}`);
  });
});

// Floating Action Button
const fab = document.createElement('div');
fab.className = 'fab';
fab.innerHTML = '<i class="fas fa-comments"></i>';
document.body.appendChild(fab);

fab.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Cart Notification
let cartCount = 0;
const cartIcon = document.querySelector('.fa-shopping-cart');

document.querySelector('.nav-item[href="#"]').addEventListener('click', (e) => {
  e.preventDefault();
  cartCount++;
  cartIcon.parentElement.setAttribute('data-count', cartCount);
  showNotification(`Item ditambahkan ke keranjang (Total: ${cartCount})`);
});

// Notification System
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Responsive Menu
const menuButton = document.createElement('div');
menuButton.className = 'menu-button';
menuButton.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('.header-top').appendChild(menuButton);

menuButton.addEventListener('click', () => {
  document.querySelector('.nav-list').classList.toggle('active');
});

// Phone Number Formatting
document.querySelector('.phone-input').addEventListener('input', function(e) {
  let value = e.target.value.replace(/\D/g, '');
  if (value.length > 3) value = value.replace(/(\d{3})(\d{3})?(\d{4})?/, '$1-$2-$3');
  e.target.value = value.substring(0, 14);
});

// Package Selection
document.querySelectorAll('.package-card').forEach(card => {
  card.addEventListener('click', () => {
    const operator = card.querySelector('.operator-label').textContent;
    const amount = card.querySelector('.package-amount').textContent;
    const price = card.querySelector('.discounted-price').textContent;
    
    const selectedPackage = {
      operator,
      amount,
      price
    };
    
    showPackageDetail(selectedPackage);
  });
});

function showPackageDetail(pkg) {
  const detail = `
    Operator: ${pkg.operator}
    Paket: ${pkg.amount}
    Harga: ${pkg.price}
  `;
  
  const confirmation = confirm(`${detail}\n\nLanjutkan pembelian?`);
  if (confirmation) {
    window.location.href = '#';
  }
}

// Check Button Handler
document.querySelector('.check-button').addEventListener('click', () => {
  const phoneNumber = document.querySelector('.phone-input').value;
  if (phoneNumber.length < 10) {
    showNotification('Nomor handphone tidak valid!');
    return;
  }
  showNotification(`Memeriksa nomor ${phoneNumber}...`);
});
