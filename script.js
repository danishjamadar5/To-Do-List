const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Load tasks from local storage on page load
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to display tasks using map
function displayTasks() {
    taskList.innerHTML = savedTasks.map((task, index) => {
        return `
            <li>
                <span>${task}</span>
                <button class="delete-button" data-index="${index}">Delete</button>
            </li>
        `;
    }).join('');
}

// Add task event listener
addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        savedTasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
        taskInput.value = "";
        displayTasks();
    }
});

// Delete task event listener
taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
        const index = event.target.getAttribute("data-index");
        savedTasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
        displayTasks();
    }
});

// Initial display of tasks
displayTasks();
