// Scroll to top
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.pageYOffset > 300);
});
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Botões
document.querySelectorAll('.map-button-wrapper').forEach(btn => {
    btn.addEventListener('click', () => {
        window.open('https://www.quax.com.br', '_blank');
    });
});

// Cards hover (apenas para desktop/mouse — desativa efeito 3D em touch)
const isTouchDevice = () => window.matchMedia('(hover: none)').matches;

document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        if (isTouchDevice()) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = (y - rect.height / 2) / 20;
        const rotateY = (rect.width / 2 - x) / 20;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.05)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
    });
});
