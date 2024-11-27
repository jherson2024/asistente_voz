document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('send-message');
    const messageInput = document.getElementById('message-input');
    const messageContainer = document.getElementById('message-container');
  
    // Función para mostrar los mensajes
    const displayMessage = (message, type) => {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', type);
      messageElement.textContent = message;
      messageContainer.appendChild(messageElement);
      messageContainer.scrollTop = messageContainer.scrollHeight;  // Desplazarse al último mensaje
    };
  
    // Evento de enviar mensaje
    sendButton.addEventListener('click', () => {
      const message = messageInput.value.trim();
      if (message) {
        // Mostrar el mensaje del usuario
        displayMessage(message, 'sent');
  
        // Limpiar el campo de entrada
        messageInput.value = '';
  
        // Simular la respuesta automática
        setTimeout(() => {
          displayMessage('¡Estoy aquí para ayudarte!', 'received');
        }, 1000);
      }
    });
  
    // Enviar mensaje al presionar Enter
    messageInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendButton.click();
      }
    });
  });
  