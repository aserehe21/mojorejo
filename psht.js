

// Scroll halus untuk navigasi (jika internal)
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Navbar aktif saat scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('nav a');

  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});



// Teks berjalan (marquee replacement dengan JS)
const ticker = document.getElementById("ticker");
if (ticker) {
  let pos = ticker.offsetWidth;
  function move() {
    pos--;
    ticker.style.transform = `translateX(${pos}px)`;
    if (pos < -ticker.scrollWidth) pos = ticker.offsetWidth;
    requestAnimationFrame(move);
  }
  move();
}

localStorage.removeItem("popupSudahDitampilkan")
