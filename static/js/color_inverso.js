// Función para invertir un color
function getInvertedColor(rgb) {
    const [r, g, b] = rgb;
    return `rgb(${255 - r}, ${255 - g}, ${255 - b})`; // Calcula el inverso
  }
  
  // Función principal para analizar la imagen de fondo
  function applyDynamicTextColor() {
    const featureElements = document.querySelectorAll('.feature'); // Selecciona los contenedores con imágenes
  
    featureElements.forEach(feature => {
      const bgImage = window.getComputedStyle(feature).backgroundImage; // Obtén la URL de la imagen de fondo
  
      if (bgImage && bgImage.startsWith('url')) {
        // Extrae la URL de la imagen
        const imageUrl = bgImage.slice(5, -2);
  
        // Usar Vibrant para calcular el color dominante
        Vibrant.from(imageUrl).getPalette().then(palette => {
          if (palette.Vibrant) {
            const dominantColor = palette.Vibrant.getRgb(); // Obtén el color Vibrant
            const invertedColor = getInvertedColor(dominantColor); // Calcula el inverso
  
            // Aplica el color invertido a los encabezados
            const heading = feature.querySelector('h2');
            if (heading) {
              heading.style.color = invertedColor;
            }
          }
        }).catch(error => {
          console.error('Error al procesar la imagen:', error);
        });
      }
    });
  }
  
  // Llama a la función después de que el DOM esté cargado
  document.addEventListener('DOMContentLoaded', applyDynamicTextColor);
  