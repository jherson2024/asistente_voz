const canvas = document.getElementById("turtleCanvas");
const ctx = canvas.getContext("2d");

// Configuración inicial
ctx.translate(canvas.width / 2, canvas.height / 2); // Centrar en el canvas
ctx.lineWidth = 2;

// Lista de colores para el arcoíris
const rainbowColors = ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#8b00ff"];
const centerColor = "#ecd549"; // Color del centro
const seedColor = "#Ae7846";  // Color de las semillas
const goldenAngle = 137.508;  // Ángulo dorado (en grados)

// Índices para animación
let petalGroup = 0; // Índice de grupo de pétalos (16 grupos)
let petalStep = 0;  // Índice del arco dentro del pétalo
let spiralStep = 0; // Índice para las semillas

// Dibujar un arco de círculo
function drawArc(radius, startAngle, endAngle, color) {
  ctx.beginPath();
  ctx.arc(0, 0, radius, startAngle, endAngle);
  ctx.strokeStyle = color;
  ctx.stroke();
}

// Dibujar pétalos
function drawPetals() {
  if (petalGroup < 16) {
    const color = rainbowColors[petalGroup % rainbowColors.length]; // Color del pétalo actual

    if (petalStep < 18) {
      const radius = 150 - petalStep * 6;

      // Dibujar primer arco
      drawArc(radius, Math.PI / 2, (3 * Math.PI) / 2, color);

      // Dibujar segundo arco
      drawArc(radius, (3 * Math.PI) / 2, Math.PI / 2, color);

      petalStep++;
    } else {
      petalStep = 0;
      petalGroup++;
      ctx.rotate((Math.PI / 180) * 24); // Rotar el contexto 24° entre grupos de pétalos
    }
    requestAnimationFrame(drawPetals);
  } else {
    drawCenter();
    drawSpiral();
  }
}

// Dibujar el centro de la flor
function drawCenter() {
  ctx.beginPath();
  ctx.arc(0, 0, 40, 0, Math.PI * 2);
  ctx.fillStyle = centerColor;
  ctx.fill();
}

// Dibujar semillas en espiral
function drawSpiral() {
  if (spiralStep < 140) {
    const r = 4 * Math.sqrt(spiralStep); // Radio
    const theta = spiralStep * goldenAngle * (Math.PI / 180); // Convertir a radianes
    const x = r * Math.cos(theta);
    const y = r * Math.sin(theta);

    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2); // Semilla de 2px
    ctx.fillStyle = seedColor;
    ctx.fill();

    spiralStep++;
    requestAnimationFrame(drawSpiral);
  }
}

// Iniciar la animación
drawPetals();
