// FOOTER POP UP

let 
    body = document.querySelector('body');

const
    btnFooter = document.querySelectorAll('.btn--footer'),
    close = document.querySelectorAll('.close');

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

// MEDIA POP UP

const
    btnPopup = document.querySelectorAll('.btn-popup'),
    closeMedia = document.querySelectorAll('.close-media');;

    console.log(btnPopup);

btnPopup.forEach(item => {
  item.addEventListener('click', event => {
    let index = Array.prototype.slice.call(item.parentElement.children).indexOf(item);
    let popup = document.querySelectorAll('.media__popup');
    popup[index].classList.add('active-popup--media');
    body.style.overflow = 'hidden';
  })
});

closeMedia.forEach(item => {
  item.addEventListener('click', event => {
    let popup = document.querySelectorAll('.media__popup');
    popup.forEach(item => {
      item.classList.remove('active-popup--media');
      body.style.overflow = 'visible';
    })
  })
});


// Box slider

$('.bxslider').bxSlider({
    slideMargin: 10,
    minSlides: 4,
    maxSlides: 10,
    slideWidth: 300,
    
  });