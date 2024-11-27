document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM completamente cargado y procesado");

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    console.error("El reconocimiento de voz no es compatible con este navegador.");
    alert("Tu navegador no soporta reconocimiento de voz. Prueba con Chrome.");
  } else {
    const recognition = new SpeechRecognition();
    console.log("Reconocimiento de voz inicializado");

    // Estilos disponibles
    const styles = {
      "modo oscuro": {
        backgroundColor: "black",
        color: "white"
      },
      "modo claro": {
        backgroundColor: "white",
        color: "black"
      },
      "estilo moderno": {
        backgroundColor: "#f4f4f9",
        color: "#333",
        fontFamily: "Arial, sans-serif"
      },
      "estilo retro": {
        backgroundColor: "#ffefd5",
        color: "#000",
        fontFamily: "'Courier New', monospace"
      }
    };

    const applyStyle = (style) => {
      console.log(`Intentando aplicar estilo: ${style}`);
      const container = document.querySelector(".container");
      const body = document.body;

      if (styles[style]) {
        console.log("Estilo encontrado. Aplicando...");
        Object.assign(body.style, styles[style]);
        console.log(`Estilo "${style}" aplicado exitosamente.`);
      } else {
        console.error(`Estilo "${style}" no encontrado.`);
        alert("No reconozco ese estilo. Intenta decir: 'modo oscuro', 'modo claro', 'estilo moderno' o 'estilo retro'.");
      }
    };

    // Iniciar reconocimiento de voz
    const button = document.getElementById("voice-command");
    if (button) {
      console.log("Botón encontrado. Registrando evento de clic...");
      button.addEventListener("click", () => {
        console.log("Botón 'voice-command' clickeado.");
        recognition.start();
      });
    } else {
      console.error("Botón con ID 'voice-command' no encontrado en el DOM.");
    }
    
    // Manejar los comandos de voz
    recognition.onresult = (event) => {
      const voiceCommand = event.results[0][0].transcript.toLowerCase();
      console.log(`Comando recibido: ${voiceCommand}`);

      if (styles[voiceCommand]) {
        applyStyle(voiceCommand);
      } else {
        console.warn(`El comando "${voiceCommand}" no corresponde a un estilo válido.`);
        alert("No reconozco ese estilo. Intenta decir: 'modo oscuro', 'modo claro', 'estilo moderno' o 'estilo retro'.");
      }
    };

    recognition.onerror = (event) => {
      console.error("Error en el reconocimiento de voz:", event.error);
      alert("Hubo un error con el reconocimiento de voz. Por favor, intenta nuevamente.");
    };

    recognition.onstart = () => {
      console.log("Reconocimiento de voz iniciado.");
    };

    recognition.onend = () => {
      console.log("Reconocimiento de voz finalizado.");
    };
  }
});
