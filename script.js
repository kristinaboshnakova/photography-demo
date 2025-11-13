AOS.init();

// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 500);
});

// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
});

// Dark / Light Mode
document.getElementById("toggle-mode").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const btn = document.getElementById("toggle-mode");
  btn.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});

// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});



// ----- Мобилно бургер меню -----
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});



// ----- Popup Галерия -----
const popup = document.getElementById('popup');
const popupImg = document.querySelector('.popup-img');
const closePopup = document.querySelector('.popup .close');

document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', () => {
    popup.classList.add('active');
    popupImg.src = img.src;
  });
});

closePopup.addEventListener('click', () => {
  popup.classList.remove('active');
});

popup.addEventListener('click', e => {
  if (e.target === popup) popup.classList.remove('active');
});


// ----- Popup слайдшоу -----
const galleryItems = document.querySelectorAll('.gallery-item img');
let currentIndex = 0;

function showImage(index, direction = 'next') {
  if (index < 0) index = galleryItems.length - 1;
  if (index >= galleryItems.length) index = 0;
  currentIndex = index;
  popupImg.src = galleryItems[currentIndex].src;
  popupImg.style.animation = direction === 'next' ? 'slideNext 0.5s ease' : 'slidePrev 0.5s ease';
}

document.querySelector('.next').addEventListener('click', () => showImage(currentIndex + 1, 'next'));
document.querySelector('.prev').addEventListener('click', () => showImage(currentIndex - 1, 'prev'));

// Отваряне popup
galleryItems.forEach((img, i) => {
  img.addEventListener('click', () => {
    popup.classList.add('active');
    showImage(i);
  });
});

// Навигация с клавиатура
document.addEventListener('keydown', e => {
  if (!popup.classList.contains('active')) return;
  if (e.key === 'ArrowRight') showImage(currentIndex + 1, 'next');
  if (e.key === 'ArrowLeft') showImage(currentIndex - 1, 'prev');
  if (e.key === 'Escape') popup.classList.remove('active');
});


document.querySelector('.next').addEventListener('click', () => showImage(currentIndex + 1, 'next'));
document.querySelector('.prev').addEventListener('click', () => showImage(currentIndex - 1, 'prev'));
