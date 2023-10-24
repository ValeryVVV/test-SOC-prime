let header = document.getElementById('active-card');
let btns = header.getElementsByClassName('card-item');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('active');
    if (current.length > 0) {
      current[0].className = current[0].className.replace(' active', '');
    }
    this.className += ' active';
    // openModal();
  });
}
