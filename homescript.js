ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.secondsection h1, .thirdsection h1', { origin: 'top' });
ScrollReveal().reveal('.upper p, .upper img', { origin: 'left' });
ScrollReveal().reveal('.thirdsection div img', { origin: 'right' });
ScrollReveal().reveal('.secondsection p, .thirdsection p', { origin: 'bottom' });