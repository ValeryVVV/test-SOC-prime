const modal = document.getElementById('simpleModal');
var modals = document.querySelectorAll('.modal');
const modalBtn = document.querySelectorAll('.card-btn__start');

const closeBtn = document.getElementsByClassName('closeBtn')[0];

const item = document.querySelectorAll('.card-border__text');

modalBtn.forEach(function (e) {
  e.addEventListener('click', openModal);
});

item.forEach(function (e) {
  e.addEventListener('mouseover', openModal);
});

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', outsideClick);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
