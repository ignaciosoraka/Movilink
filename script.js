const nightContainer = document.getElementById('night');

// Función para generar un retraso aleatorio en milisegundos
function getRandomDelay() {
  return Math.random() * 5000; // Puedes ajustar el rango del retraso según tus preferencias
}

// Crea las estrellas de manera dinámica y las agrega al contenedor
for (let i = 0; i < 100; i++) { // Genera 100 estrellas, ajusta según sea necesario
  const star = document.createElement('div');
  star.classList.add('shooting_star');
  
  // Posición aleatoria para cada estrella
  const randomTop = Math.floor(Math.random() * window.innerHeight); // Posición aleatoria vertical
  const randomLeft = Math.floor(Math.random() * window.innerWidth); // Posición aleatoria horizontal
  star.style.top = randomTop + 'px';
  star.style.left = randomLeft + 'px';
  
  // Aplica un retraso aleatorio para la animación de cada estrella
  star.style.animationDelay = getRandomDelay() + 'ms';

  nightContainer.appendChild(star);
}
