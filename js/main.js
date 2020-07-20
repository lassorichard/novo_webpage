let 
    body = document.querySelector('body');

const
    btnFooter = document.querySelectorAll('.btn--footer'),
    close = document.querySelectorAll('.close')

    console.log(btnFooter);

btnFooter.forEach(item => {
  item.addEventListener('click', event => {
    let index = Array.prototype.slice.call(item.parentElement.children).indexOf(item);
    let popup = document.querySelectorAll('.footer-popup');
    popup[index].classList.add('active-popup');
    body.style.overflow = 'hidden';
  })
});

close.forEach(item => {
  item.addEventListener('click', event => {
    let popup = document.querySelectorAll('.footer-popup');
    popup.forEach(item => {
      item.classList.remove('active-popup');
      body.style.overflow = 'visible';
    })
  })
});