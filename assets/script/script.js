const navbarNav = document.querySelector('.navbar-nav');
const navbarBlurred = document.getElementById('navbar');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      navbar.classList.add('blurred');
    } else {
      navbar.classList.remove('blurred');
    }
  });