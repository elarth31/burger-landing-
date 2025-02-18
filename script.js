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