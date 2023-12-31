const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuItems = document.querySelectorAll('nav ul li a');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('active');
});

menuItems.forEach(item => {
  item.addEventListener('click', function(event) {
    event.preventDefault();

    const target = document.querySelector(item.getAttribute('href'));

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // Menutup menu setelah menu diklik (opsional)
    const menuToggle = document.getElementById('menu-toggle');
    menuToggle.checked = false;
  });
});

var swiper0 = new Swiper('.swiper0', {
  cssMode: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.swiper0 .swiper-button-next',
    prevEl: '.swiper0 .swiper-button-prev',
  },
  pagination: {
    el: '.swiper0 .swiper-pagination',
    clickable: true,
  },
});

const swiper = new Swiper('.slider1', {
  cssMode: true,
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
  cssMode: true,
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper2 .swiper-button-next",
    prevEl: ".swiper2 .swiper-button-prev",
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