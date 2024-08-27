document.addEventListener('DOMContentLoaded', function () {
  const hamburgerLines = document.querySelector('.hamburger-lines');
  const menuItems = document.querySelector('.menu-items');

  hamburgerLines.addEventListener('click', function () {
      menuItems.classList.toggle('active');
      hamburgerLines.classList.toggle('active');
  });
});
