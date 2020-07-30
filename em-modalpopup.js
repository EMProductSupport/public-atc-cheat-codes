let buttons = document.querySelectorAll('.pop-nav button');
let modals = document.querySelectorAll('.hcard-modal');

function showModal(id) {
  let m = document.getElementById(id);
  m.classList.add('hcard-visible');
}

function hideModals() {
  modals.forEach(m => {
    m.classList.remove('hcard-visible');
  });
}

buttons.forEach(b => {
  b.addEventListener('click', event => {
    hideModals();
    showModal(b.dataset.modal);
  });
});

modals.forEach(m => {
  let x = m.querySelector('button.close');
  x.addEventListener('click', hideModals);
});
