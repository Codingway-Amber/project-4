const toggleButton = document.querySelector('.toggle-button');
const navbar = document.querySelector('.navbar ul');

toggleButton.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
