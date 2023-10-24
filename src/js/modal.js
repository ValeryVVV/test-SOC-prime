import { Notify } from 'notiflix/build/notiflix-notify-aio';

refs = {
  modal: document.getElementById('myModal'),
  btn: document.querySelectorAll('.card-btn__start'),
  closeBtn: document.getElementsByClassName('close')[0],
  cancelModalBtn: document.querySelector('.modal-btn__cancel'),
  modalStartBtn: document.querySelector('.modal-btn__start'),
  compareCardBtn: document.getElementsByClassName('card-btn__compare')[0],
};

// refs.compareCardBtn.addEventListener('click', () => {
//   if (classList.contains('card-btn__compare')) {
//     refs.modal.style.display = 'none';
//   }
// });

let header = document.getElementById('active-card');
let btns = header.getElementsByClassName('card-item');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('active');
    if (current.length > 0) {
      current[0].className = current[0].className.replace(' active', '');
    }
    this.className += ' active';

    openModal();
  });
}

refs.btn.forEach(function (e) {
  e.addEventListener('click', openModal);
});

refs.closeBtn.addEventListener('click', closeModal);

refs.cancelModalBtn.addEventListener('click', closeModal);

refs.modalStartBtn.addEventListener('click', async () => {
  try {
    const response = await fetch('https://reqres.in/api/articles', {
      method: 'POST',
      body: JSON.stringify({
        message: 'Click On Get Started Button From Modal',
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });

    Notify.success('Click On Get Started Button From Modal', response);
    console.log('Click On Get Started Button From Modal', response);
  } catch (error) {
    Notify.failure('Click On Get Started Button From Modal Error');
    console.error(
      `Click On Get Started Button From Modal Error: ${error.message}`
    );
  }
  refs.modal.style.display = 'none';
});

async function openModal() {
  refs.modal.style.display = 'block';
}

async function closeModal() {
  refs.modal.style.display = 'none';

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({
        message: 'Click On Close Button From Modal Error',
      }),
      headers: {
        'Content-type': 'application/json',
      },
    }).then(response => response.json());
    Notify.success('Click On Close Button From Modal', response);
    console.log('Click On Close Button From Modal', response);
  } catch (error) {
    Notify.failure('Click On Close Button From Modal Error');
    console.error(`Click On Close Button From Modal Error: ${error.message}`);
  }
}

window.onclick = function (event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscapeKey = event.code === ESC_KEY_CODE;

  if (isEscapeKey) {
    closeModal();
  }
  if (event.target === refs.modal) {
    refs.modal.style.display = 'none';
  }
};
