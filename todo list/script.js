// DOM Elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const toDoList = document.getElementById('toDoList');
const clearAllBtn = document.getElementById('clearAllBtn');

// Add Task
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create List Item
    const listItem = document.createElement('li');

    // Task Text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Timestamp
    const timestampSpan = document.createElement('span');
    timestampSpan.textContent = formatTime(new Date());
    timestampSpan.className = 'timestamp';

    // Toggle Completion
    listItem.addEventListener('click', () => {
        listItem.classList.toggle('completed');
    });

    // Remove Task on Double-Click
    listItem.addEventListener('dblclick', () => {
        listItem.style.transform = 'translateX(-100%)';
        setTimeout(() => toDoList.removeChild(listItem), 300);
    });

    // Append Elements
    listItem.appendChild(taskSpan);
    listItem.appendChild(timestampSpan);
    toDoList.appendChild(listItem);

    // Clear Input
    taskInput.value = '';
});

// Clear All Tasks
clearAllBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear all tasks?')) {
        toDoList.innerHTML = '';
    }
});

// Format Timestamp
function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}
