let inactivityTime = 300000;  // 3 segundos de inactividad (puedes ajustar este tiempo)
let timeout;

function resetTimer() {
  // Resetea el temporizador cada vez que haya actividad (movimiento del ratón, teclado, etc.)
  clearTimeout(timeout);
  document.body.classList.remove('inactive');  // Asegura que la opacidad esté visible si el usuario interactúa
  timeout = setTimeout(redirectToFlowerPage, inactivityTime);
}

function redirectToFlowerPage() {
  // Aplica la transición de opacidad antes de redirigir
  document.body.classList.add('inactive');
  
  // Espera el tiempo de la transición y luego redirige
  setTimeout(() => {
    window.location.href = '/';  // Cambia por la URL correcta de la página de la flor
  }, 1000); // El tiempo debe coincidir con la duración de la transición (1 segundo en este caso)
}

// Detecta cualquier interacción del usuario (movimiento del ratón, pulsación de tecla)
window.onload = function() {
  document.addEventListener('mousemove', resetTimer);
  document.addEventListener('keypress', resetTimer);
  
  // Inicializa el temporizador al cargar la página
  resetTimer();
};