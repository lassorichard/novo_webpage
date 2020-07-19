// Variables
const btnSpeakers = document.querySelector('#speakers'),
    close = document.querySelector('#close'),
    activePopup = document.querySelector('.active-popup'),
    speakers = document.querySelector('.speakers-popup'),
    body = document.querySelector('body');


// Event listeners

btnSpeakers.addEventListener('click', (e) => {
    e.preventDefault();
    if(speakers.classList.contains('active-popup')) {
        speakers.classList.remove('active-popup');
        body.style.overflow = 'visible';
    }   else {
        speakers.classList.add('active-popup');
        body.style.overflow = 'hidden';
    }
});

close.addEventListener('click', (e) => {
    e.preventDefault();
    if(speakers.classList.contains('active-popup')) {
        speakers.classList.remove('active-popup');
        body.style.overflow = 'visible';
    }   else {
        speakers.classList.add('active-popup');
        body.style.overflow = 'hidden';
    }
});


