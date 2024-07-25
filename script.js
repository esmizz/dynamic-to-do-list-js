document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false)); // false to prevent saving again to Local Storage
  }

  // create addTask function
  function addTask(taskText, save = true) {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    //task creation and removal
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");
    removeButton.onclick = function () {
      taskList.removeChild(listItem);
      removeTaskFromStorage(taskText);
    };

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    taskInput.value = "";
  }

  // Remove task from Local Storage
  function removeTaskFromStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const updatedTasks = storedTasks.filter((task) => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  // Add event listener to the Add Task button
  addButton.addEventListener("click", (addTask) => {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      addTask();
      alert("Please enter a task");
      return;
    }
    addTask(taskText);
  });

  // Add event listener to allow adding task by pressing Enter key
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      const taskText = taskInput.value.trim();
      if (taskText === "") {
        alert("Please enter a task");
        return;
      }
      addTask(taskText);
    }
  });

  // Load tasks from Local Storage when the page loads
  loadTasks();
});
