let lastScrollTop = 0; // Posição do scroll anterior
const topSection = document.querySelector('.top-section'); // Seleciona a parte superior da página (topo)

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Quando o usuário rola para baixo, esconde o topSection
        topSection.classList.add('hidden');
    } else {
        // Quando o usuário rola para cima, mostra o topSection
        topSection.classList.remove('hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Atualiza a posição do scroll
});