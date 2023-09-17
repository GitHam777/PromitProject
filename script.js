ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.content h1', { origin: 'top' });
ScrollReveal().reveal('.content', { origin: 'left' });
ScrollReveal().reveal('.pic img', { origin: 'right' });
ScrollReveal().reveal('.pic i', { origin: 'bottom' });