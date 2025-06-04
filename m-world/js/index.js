

// Scroll Reveal
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

// Parallax SVG
const svg = document.querySelector('.raio-svg');
window.addEventListener('scroll', () => {
    const y = window.scrollY * 0.15;
    svg.style.transform = `translateY(${y}px)`;
});

function animateSkills() {
    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
        const pct = bar.getAttribute('data-skill');
        if (pct) {
            bar.style.width = pct + '%';
        }
    });
}
window.addEventListener('DOMContentLoaded', animateSkills);

// Efeito de digitação no header
const typingTexts = [
    "Futuro Engenheiro de Software",
    "Apaixonado por tecnologia",
    "Desenvolvedor em formação"
];
let typingIndex = 0, charIndex = 0, typingEl = document.getElementById('typing');
function typeEffect() {
    if (!typingEl) return;
    if (charIndex < typingTexts[typingIndex].length) {
        typingEl.textContent += typingTexts[typingIndex][charIndex++];
        setTimeout(typeEffect, 80);
    } else {
        setTimeout(() => {
            typingEl.textContent = '';
            charIndex = 0;
            typingIndex = (typingIndex + 1) % typingTexts.length;
            setTimeout(typeEffect, 400);
        }, 1200);
    }
}
window.addEventListener('DOMContentLoaded', typeEffect);

// Depoimento com efeito de digitação
const depoimentoText = "“A cada linha de código, um novo universo de possibilidades se abre. Persistência, curiosidade e paixão são os combustíveis para inovar e transformar o mundo com tecnologia.”";
let depoIndex = 0, depoEl = document.getElementById('depoimento');
function typeDepo() {
    if (!depoEl) return;
    if (depoIndex < depoimentoText.length) {
        depoEl.textContent += depoimentoText[depoIndex++];
        setTimeout(typeDepo, 35);
    }
}
window.addEventListener('DOMContentLoaded', typeDepo);

document.addEventListener('DOMContentLoaded', () => {
    const topSection = document.querySelector('.top-section');
    if (topSection) {
        topSection.classList.add('hidden');
        setTimeout(() => {
            topSection.classList.remove('hidden');
        }, 100); // delay para garantir a transição
    }
});