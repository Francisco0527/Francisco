// Carrossel de Imagens Principais
let slideIndex = 0;
const slides = document.querySelectorAll('.image-slider .slide');
const prevImageBtn = document.getElementById('prev-image');
const nextImageBtn = document.getElementById('next-image');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Muda para o próximo slide automaticamente a cada 7 segundos
setInterval(nextSlide, 7000);

// Botões de navegação manual
nextImageBtn.addEventListener('click', nextSlide);
prevImageBtn.addEventListener('click', prevSlide);

// Carrossel de Projetos
let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const visibleItems = 4.5; // Quantidade de itens visíveis no carrossel
const totalItems = items.length;

// Ajusta a largura do carrossel e dos itens
carousel.style.width = `${(totalItems / visibleItems) * 100}%`;
items.forEach(item => {
    item.style.width = `${100 / totalItems}%`;
});

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - visibleItems;
    }
    updateCarousel();
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentIndex < totalItems - visibleItems) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

function updateCarousel() {
    const offset = -(currentIndex * (100 / totalItems));
    carousel.style.transform = `translateX(${offset}%)`;
}
