// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Menú móvil
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Animación de aparición para las tarjetas
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('card-visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});

// Efecto de parallax en el hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    const limit = parallax.offsetTop + parallax.offsetHeight;
    if (scrolled > parallax.offsetTop && scrolled <= limit) {
        parallax.style.backgroundPositionY = (scrolled - parallax.offsetTop) / 1.5 + 'px';
    }
});

// Animación de flotación para los elementos del hero
const heroContent = document.querySelector('.hero-content');
heroContent.style.animation = 'float 6s ease-in-out infinite';

// Cambio de color del encabezado al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

// Efecto de brillo en hover para los botones
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        button.style.setProperty('--mouse-x', `${x}px`);
        button.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Animación de entrada para las secciones
const sections = document.querySelectorAll('section');
sections.forEach((section, index) => {
    section.style.animation = `fadeInUp 1s ease ${index * 0.2}s both`;
});

// Efecto de hover para los enlaces de navegación
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-3px)';
        link.style.color = 'var(--accent-color)';
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0)';
        link.style.color = 'var(--text-color)';
    });
});