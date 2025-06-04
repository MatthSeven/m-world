// Scroll Reveal para animação de entrada
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

// Lightbox para zoom
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
document.querySelectorAll('.certificado').forEach(img => {
    img.addEventListener('click', function() {
        lightbox.style.display = 'flex';
        lightboxImg.src = this.dataset.full;
        lightboxCaption.textContent = this.alt;
    });
});
document.querySelector('.lightbox .close').onclick = function() {
    lightbox.style.display = 'none';
};
lightbox.onclick = function(e) {
    if (e.target === lightbox) lightbox.style.display = 'none';
};

// Carrossel simples
const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('carouselPrev');
const nextBtn = document.getElementById('carouselNext');
let currentIndex = 0;

function updateCarousel() {
    const cardWidth = track.children[0].offsetWidth + 24; // card + margin
    track.scrollTo({ left: currentIndex * cardWidth, behavior: 'smooth' });
}

prevBtn.onclick = () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
};
nextBtn.onclick = () => {
    if (currentIndex < track.children.length - 1) {
        currentIndex++;
        updateCarousel();
    }
};

// Opcional: swipe para mobile
let startX = 0;
track.addEventListener('touchstart', e => startX = e.touches[0].clientX);
track.addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;
    if (endX - startX > 50 && currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    } else if (startX - endX > 50 && currentIndex < track.children.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

const toggleBtn = document.getElementById('toggleModeBtn');
toggleBtn.onclick = () => {
    document.body.classList.toggle('dark-mode');
    toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
};