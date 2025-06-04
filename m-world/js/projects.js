
// Fade-in ao rolar
function revealOnScroll() {
    document.querySelectorAll('.fade-section').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Animação ao passar o mouse nas redes sociais
document.querySelectorAll('footer a img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.classList.add('social-animate');
    });
    img.addEventListener('mouseleave', () => {
        img.classList.remove('social-animate');
    });
});