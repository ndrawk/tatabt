const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuItems = document.querySelectorAll('nav ul li a');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('active');
});

menuItems.forEach(item => {
  item.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah aksi bawaan dari link

    // Mendapatkan target dari atribut href
    const target = document.querySelector(item.getAttribute('href'));

    // Menggunakan scrollIntoView untuk melakukan scroll ke target
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // Menutup menu setelah menu diklik (opsional)
    const menuToggle = document.getElementById('menu-toggle');
    menuToggle.checked = false;
  });
});

const swiper = new Swiper('.slider1', {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper1 .swiper-button-next",
    prevEl: ".swiper1 .swiper-button-prev",
  },
  breakpoints: {
    960: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    720: {
      slidesPerView: 1
    },
    540: {
      slidesPerView: 1
    },
    320: {
      slidesPerView: 1
    },
  }
});

const swiper2 = new Swiper('.slider2', {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper2 .swiper-button-next",
    prevEl: ".swiper2 .swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    960: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    720: {
      slidesPerView: 1
    },
    540: {
      slidesPerView: 1
    },
    320: {
      slidesPerView: 1
    },
  }
});