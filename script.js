// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        // Retrieve and trim the input value
        const taskText = taskInput.value.trim();

        // Check if the input is not empty
        if (taskText === "") {
            alert('Please enter a task.');
            return;
        }

        // Create a new <li> element
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add an onclick event to the remove button
        removeButton.onclick = function() {
            taskList.removeChild(newTask);
        };

        // Append the remove button to the <li>
        newTask.appendChild(removeButton);

        // Append the <li> to the task list
        taskList.appendChild(newTask);

        // Clear the input field
        taskInput.value = '';
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
