// Referencias a los elementos del DOM
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const responseArea = document.getElementById("response-area");

// Función para enviar solicitudes al backend Flask
async function enviarMensaje(mensaje) {
  try {
    const response = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: mensaje }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.response || "Hubo un problema al procesar la respuesta.";
  } catch (error) {
    console.error("Error al conectar con el backend:", error);
    return "Hubo un error al conectar con el servidor.";
  }
}


// Función para mostrar el panel de respuesta
function mostrarPanel(mensaje) {
  responseArea.innerHTML = `<p>${mensaje}</p>`; // Actualizamos el contenido del panel
  responseArea.style.display = "block"; // Mostramos el panel
  responseArea.style.animation = "fadeIn 0.5s ease-in-out"; // Animación de entrada

  // Ocultamos el panel después de 5 segundos
  setTimeout(() => {
    responseArea.style.animation = "fadeOut 0.5s ease-in-out"; // Animación de salida
    setTimeout(() => {
      responseArea.style.display = "none"; // Ocultamos el panel completamente
    }, 1000); // Esperamos a que termine la animación de salida
  }, 10000); // Tiempo visible (5 segundos)
}

// Función para manejar el clic del botón
searchButton.addEventListener("click", async () => {
  const mensaje = searchInput.value.trim();

  if (mensaje) {
    // Mostrar mensaje del usuario
    mostrarPanel(`Tú: ${mensaje}`);
    searchInput.value = ""; // Limpiamos el input

    // Obtener respuesta del backend
    const respuesta = await enviarMensaje(mensaje);

    // Mostrar respuesta del asistente
    mostrarPanel(`Asistente: ${respuesta}`);
  } else {
    alert("Por favor, escribe un mensaje.");
  }
});
