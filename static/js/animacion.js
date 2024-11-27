 // Nombres que activan la acción
 const names = ['Senda', 'Aria', 'Elyse', 'Sofía', 'Alma', 'Clara', 'Oria', 'Nexa', 'Lina', 'Tessa', 'Luzia', 'Gaia', 'Haven', 'IoTia', 'Domus', 'Nara', 'Mira', 'Elara', 'Amia', 'Zaria'];

 // Detectar clic en cualquier parte de la página
 document.body.addEventListener('click', () => {
     handleAction("Aria"); // Solo un ejemplo. Aquí puedes pasar el nombre que desees
 });

 // Detectar comando de voz
 if (window.SpeechRecognition || window.webkitSpeechRecognition) {
     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
     const recognition = new SpeechRecognition();
     recognition.lang = 'es-ES';
     recognition.onresult = (event) => {
         const transcript = event.results[0][0].transcript.trim();
         const recognizedName = names.find(name => transcript.toLowerCase().includes(name.toLowerCase()));
         if (recognizedName) handleAction(recognizedName);
     };

     // Iniciar el reconocimiento de voz
     recognition.start();
 }

 // Función para manejar la acción (detener la animación y redirigir)
 function handleAction(name) {
     console.log(`Acción para: ${name}`);
     document.body.classList.add('fade-out'); // Agregar clase para desvanecer
     setTimeout(() => {
         // Redirigir a otro HTML después de 1 segundo
         window.location.href = "/home";
     }, 1000);
 }