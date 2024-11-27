// Archivo: iot_hogar.js

document.addEventListener('DOMContentLoaded', () => {
    const controlButtons = document.querySelectorAll('.control-button');
  
    controlButtons.forEach(button => {
      button.addEventListener('click', () => {
        const deviceName = button.parentElement.querySelector('span').textContent;
        const action = button.textContent === 'Encender' ? 'Apagar' : 'Encender';
  
        // Cambiar el texto del botón
        button.textContent = action;
  
        // Simular acción
        alert(`Dispositivo: ${deviceName} ahora está en modo "${action}"`);
      });
    });
  });
  