
const buyButtons = document.querySelectorAll('.product-cart__btn');
const modal = document.getElementById('product-modal');
const closeBtn = modal.querySelector('.modal__close');


buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.classList.add('modal--active');
  });
});


closeBtn.addEventListener('click', () => {
  modal.classList.remove('modal--active');
});


modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('modal--active');
  }
});