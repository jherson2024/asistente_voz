// Elementos
const openModalButton = document.getElementById('open-organizer');
const closeModalButton = document.getElementById('close-modal');
const modalOverlay = document.getElementById('modal-overlay');
const body = document.body;

const openIotModalButton = document.getElementById('open-iot');
const closeIotModalButton = document.getElementById('close-iot-modal');
const iotModalOverlay = document.getElementById('iot-modal-overlay');

const openEmotionalHelpModalButton = document.getElementById('open-emotional-help');
const closeEmotionalHelpModalButton = document.getElementById('close-emotional-help-modal');
const emotionalHelpModalOverlay = document.getElementById('emotional-help-modal-overlay');

// Abrir modal de Organizador
openModalButton.addEventListener('click', () => {
    modalOverlay.style.display = 'flex'; // Mostrar el modal
    body.classList.add('modal-active'); // Desenfocar el fondo
});

// Cerrar modal de Organizador
closeModalButton.addEventListener('click', () => {
    modalOverlay.style.display = 'none'; // Ocultar el modal
    body.classList.remove('modal-active'); // Quitar el desenfoque del fondo
});

// Abrir modal de Dispositivos IoT
openIotModalButton.addEventListener('click', () => {
    iotModalOverlay.style.display = 'flex'; // Mostrar el modal
    body.classList.add('modal-active'); // Desenfocar el fondo
});

// Cerrar modal de Dispositivos IoT
closeIotModalButton.addEventListener('click', () => {
    iotModalOverlay.style.display = 'none'; // Ocultar el modal
    body.classList.remove('modal-active'); // Quitar el desenfoque del fondo
});

// Abrir modal de Ayuda Emocional
openEmotionalHelpModalButton.addEventListener('click', () => {
    emotionalHelpModalOverlay.style.display = 'flex'; // Mostrar el modal
    body.classList.add('modal-active'); // Desenfocar el fondo
});

// Cerrar modal de Ayuda Emocional
closeEmotionalHelpModalButton.addEventListener('click', () => {
    emotionalHelpModalOverlay.style.display = 'none'; // Ocultar el modal
    body.classList.remove('modal-active'); // Quitar el desenfoque del fondo
});
