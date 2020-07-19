// Variables

// speaker pop up

let close = document.querySelector('#close'),
    body = document.querySelector('body');

const btnSpeakers = document.querySelector('#speakers'),
    activePopup = document.querySelector('.active-popup'),
    speakers = document.querySelector('.speakers-popup');
    

// schedule pop up

const btnSchedule = document.querySelector('#schedule'),
schedule = document.querySelector('.schedule-popup');


// Event listeners

// speakers pop up

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

// schedule pop up

btnSchedule.addEventListener('click', (e) => {
    e.preventDefault();
    if(schedule.classList.contains('active-popup')) {
        schedule.classList.remove('active-popup');
        body.style.overflow = 'visible';
    }   else {
        schedule.classList.add('active-popup');
        body.style.overflow = 'hidden';
    }
});

close.addEventListener('click', (e) => {
    e.preventDefault();
    if(schedule.classList.contains('active-popup')) {
        schedule.classList.remove('active-popup');
        body.style.overflow = 'visible';
    }   else {
        schedule.classList.add('active-popup');
        body.style.overflow = 'hidden';
    }
});


