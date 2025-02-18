AOS.init();


const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'block';
      scrollToTopBtn.classList.add('active');
    } else {
      scrollToTopBtn.style.display = 'none';
      scrollToTopBtn.classList.remove('active');
    }
  });

  scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });



  const burgerButton = document.querySelector('.burger-menu');
  const navMenu = document.querySelector('.header__nav');
  const overlay = document.querySelector('.overlay');

  burgerButton.addEventListener('click', function () {
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll'); // чтобы не скролить фон
  });

  overlay.addEventListener('click', function () {
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
