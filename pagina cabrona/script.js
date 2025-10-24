document.addEventListener("DOMContentLoaded", () => {
    
    // Seleccionamos todas las tarjetas del equipo
    const cards = document.querySelectorAll('.team-card');

    // Opciones para el IntersectionObserver
    const observerOptions = {
        root: null, // Observa en relación al viewport
        rootMargin: '0px',
        threshold: 0.1 // Se activa cuando el 10% de la tarjeta es visible
    };

    // Creamos el observador
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si la tarjeta está entrando en la vista
            if (entry.isIntersecting) {
                // Añadimos la clase 'visible' para activar la animación CSS
                entry.target.classList.add('visible');
                
                // Dejamos de observar esta tarjeta una vez que ya fue animada
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Le decimos al observador que vigile cada una de las tarjetas
    cards.forEach(card => {
        observer.observe(card);
    });

});