const nightContainer = document.getElementById('night');

// Función para generar un retraso aleatorio en milisegundos
function getRandomDelay() {
  return Math.random() * 1000; // Puedes ajustar el rango del retraso según tus preferencias
}

// Función para verificar si el dispositivo es móvil
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Determina la cantidad de estrellas a generar según el tipo de dispositivo
const starCount = isMobileDevice() ? 50 : 50;

// Crea las estrellas de manera dinámica y las agrega al contenedor
for (let i = 0; i < starCount; i++) {
  const star = document.createElement('div');
  star.classList.add('shooting_star');
  
  // Posición aleatoria para cada estrella
  const randomTop = Math.floor(Math.random() * window.innerHeight);
  const randomLeft = Math.floor(Math.random() * window.innerWidth);
  star.style.top = randomTop + 'px';
  star.style.left = randomLeft + 'px';
  
  // Aplica un retraso aleatorio para la animación de cada estrella
  star.style.animationDelay = getRandomDelay() + 'ms';

  nightContainer.appendChild(star);
}
