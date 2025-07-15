// Scroll to Top Button
document.addEventListener('DOMContentLoaded', function () {
  const toTopBtn = document.getElementById('toTop');

  if (toTopBtn) {
    toTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
