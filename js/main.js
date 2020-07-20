// Variables

let 
    activePopup = document.querySelector('.active-popup'),
    body = document.querySelector('body');


const 
    btnSpeakers = document.querySelector('#speakers'),
    btnSchedule = document.querySelector('#schedule'),
    btnFiles = document.querySelector('#files'),
    btnLanguage = document.querySelector('#language'),
    
    speakers = document.querySelector('.speaker'),
    schedule = document.querySelector('.schedule'),
    files = document.querySelector('.files'),
    language = document.querySelector('.language'),

    close1 = document.querySelector('#close-1'),
    close2 = document.querySelector('#close-2'),
    close3 = document.querySelector('#close-3'),
    close4 = document.querySelector('#close-4');

// Event listeners

// speakers pop up

btnSpeakers.addEventListener('click', (speaker) => {
    speaker.preventDefault();
    if(speakers.classList.contains('active-popup')) {
        speakers.classList.remove('active-popup');
        body.style.overflow = 'visible';
    }   else {
        speakers.classList.add('active-popup');
        body.style.overflow = 'hidden';
    }
});

close1.addEventListener('click', (speaker) => {
    speaker.preventDefault();
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

close2.addEventListener('click', (e) => {
    e.preventDefault();
    if(schedule.classList.contains('active-popup')) {
        schedule.classList.remove('active-popup');
        body.style.overflow = 'visible';
    }   else {
        schedule.classList.add('active-popup');
        body.style.overflow = 'hidden';
    }
});

// files pop up

btnFiles.addEventListener('click', (e) => {
    e.preventDefault();
    if(files.classList.contains('active-popup')) {
        files.classList.remove('active-popup');
        body.style.overflow = 'visible';
    }   else {
        files.classList.add('active-popup');
        body.style.overflow = 'hidden';
    }
});

close3.addEventListener('click', (e) => {
    e.preventDefault();
    if(files.classList.contains('active-popup')) {
        files.classList.remove('active-popup');
        body.style.overflow = 'visible';
    }   else {
        files.classList.add('active-popup');
        body.style.overflow = 'hidden';
    }
});

// language pop up

btnLanguage.addEventListener('click', (e) => {
    e.preventDefault();
    if(language.classList.contains('active-popup')) {
        language.classList.remove('active-popup');
        body.style.overflow = 'visible';
    }   else {
        language.classList.add('active-popup');
        body.style.overflow = 'hidden';
    }
});

close4.addEventListener('click', (e) => {
    e.preventDefault();
    if(language.classList.contains('active-popup')) {
        language.classList.remove('active-popup');
        body.style.overflow = 'visible';
    }   else {
        language.classList.add('active-popup');
        body.style.overflow = 'hidden';
    }
});