document.addEventListener('DOMContentLoaded', () => {
    const sectors = ['Trabajo', 'Educación', 'Casa', 'Familia', 'Todas'];
    let currentSectorIndex = 0;

    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const prioritySelect = document.getElementById('prioritySelect');
    const taskContainer = document.getElementById('taskContainer');
    const currentSector = document.getElementById('currentSector');
    const prevSector = document.getElementById('prevSector');
    const nextSector = document.getElementById('nextSector');

    const tasksBySector = {
        Trabajo: [],
        Educación: [],
        Casa: [],
        Familia: [],
        Todas: [],
    };

    // Actualizar el texto del sector actual
    const updateSectorDisplay = () => {
        currentSector.textContent = sectors[currentSectorIndex];
        renderTasks();
    };

    // Renderizar las tareas del sector actual
    const renderTasks = () => {
        taskContainer.innerHTML = '';
        const currentTasks = currentSectorIndex === sectors.length - 1
            ? Object.values(tasksBySector).flat() // Mostrar todas las tareas
            : tasksBySector[sectors[currentSectorIndex]];

        currentTasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <span class="task-name">${task.name}</span>
                <span class="priority ${task.priority}">${task.priority}</span>
                <button class="delete-btn">Eliminar</button>
            `;

            taskItem.querySelector('.delete-btn').addEventListener('click', () => {
                const index = currentTasks.indexOf(task);
                if (index !== -1) currentTasks.splice(index, 1);
                renderTasks();
            });

            taskContainer.appendChild(taskItem);
        });
    };

    // Manejadores de eventos para cambiar de sector
    prevSector.addEventListener('click', () => {
        currentSectorIndex = (currentSectorIndex - 1 + sectors.length) % sectors.length;
        updateSectorDisplay();
    });

    nextSector.addEventListener('click', () => {
        currentSectorIndex = (currentSectorIndex + 1) % sectors.length;
        updateSectorDisplay();
    });

    // Agregar tarea al sector actual
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskName = taskInput.value.trim();
        const priority = prioritySelect.value;

        if (taskName && priority) {
            const currentSectorName = sectors[currentSectorIndex];
            if (currentSectorName !== 'Todas') {
                tasksBySector[currentSectorName].push({ name: taskName, priority });
            }
            tasksBySector.Todas.push({ name: taskName, priority });

            taskInput.value = '';
            prioritySelect.value = '';

            renderTasks();
        }
    });

    // Inicialización
    updateSectorDisplay();
});
