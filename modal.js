const open = document.getElementById('open');
const modal_area = document.getElementById('modal_area');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_area.classList.add('show');
})

close.addEventListener('click', () => {
  modal_area.classList.remove('show');
})