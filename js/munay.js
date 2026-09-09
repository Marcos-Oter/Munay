// MUNAY — minimal frontend behavior, ready to be replaced by PHP/API calls.
(() => {
  const count = document.querySelector('#cartCount');
  let cart = 0;

  document.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', () => {
      cart += 1;
      count.textContent = cart;
      btn.textContent = 'AGREGADO';
      setTimeout(() => btn.textContent = 'VER MÁS', 900);
    });
  });

  document.querySelectorAll('.filters button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filters button').forEach(x => x.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.product-card').forEach(card => {
        card.hidden = filter !== 'todos' && card.dataset.category !== filter;
      });
    });
  });
})();

ScrollReveal().reveal('.products', {
  delay: 300,       // Retardo en milisegundos
  duration: 1000,   // Duración de la animación en milisegundos
  distance: '50px', // Distancia que se desplaza el elemento
  origin: 'bottom'  // Dirección desde donde aparece (arriba, abajo, izquierda, derecha)
});

ScrollReveal().reveal('.hero', {
  delay: 500,
  duration: 600
});
