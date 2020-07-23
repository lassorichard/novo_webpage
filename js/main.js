// FOOTER POP UP

let 
    body = document.querySelector('body');

const
    btnFooter = document.querySelectorAll('.btn--footer'),
    close = document.querySelectorAll('.close'),
    btnPopup = document.querySelectorAll('.btn-popup'),
    closeM = document.querySelectorAll('.close-media');

btnFooter.forEach(item => {
  item.addEventListener('click', event => {
    let index = Array.prototype.slice.call(item.parentElement.children).indexOf(item);
    let popup = document.querySelectorAll('.footer-popup');
    popup[index].classList.add('active-popup');
    body.style.overflow = 'hidden';
  })
});

btnPopup.forEach(item => {
  item.addEventListener('click', event => {
    let index = Array.prototype.slice.call(item.parentElement.children).indexOf(item);
    let popup = document.querySelectorAll('.media__popup');
    popup[index].classList.add('active-popup--media');
    body.style.overflow = 'hidden';
  })
});

close.forEach(item => {
  item.addEventListener('click', event => {
    event.stopPropagation();
    let popup = document.querySelectorAll('.footer-popup');
    let popupmedia = document.querySelectorAll('.media__popup');
    popup.forEach(item => {
      item.classList.remove('active-popup');
      body.style.overflow = 'visible';
    });
    popupmedia.forEach(item => {
      item.classList.remove('active-popup--media');
      body.style.overflow = 'visible';
    });
  })
});

// Box slider

$('.bxslider').bxSlider({
    minSlides: 4,
    maxSlides: 10,
    slideWidth: 300,
    
  });