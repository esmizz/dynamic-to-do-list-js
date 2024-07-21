// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    // Function to add a new task
    function addTask() {
        // Retrieve and trim the value from the input field
        const taskText = taskInput.value.trim();
        
        // Check if the input is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
        
        // Create new elements for the task
        const li = document.createElement('li');
        li.textContent = taskText;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';
        
        // Add an event listener to the remove button
        removeButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });
        
        // Append the remove button to the li, then append li to the task list
        li.appendChild(removeButton);
        taskList.appendChild(li);
        
        // Clear the input field
        taskInput.value = "";
    }
    
    // Attach event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
