const fade = document.querySelector('.fade');

window.addEventListener('scroll', () => {
    fade.array.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add('show');
        }
         });
    });