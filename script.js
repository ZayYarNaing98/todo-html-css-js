// Get the input field and button elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");

// Add event listener to button to create new task
addBtn.addEventListener("click", function() {
    // Get the value of the input field
    const taskValue = taskInput.value;
    if (taskValue) {
        // Create new task list item
        const newTask = document.createElement("li");
        const taskText = document.createTextNode(taskValue);
        newTask.appendChild(taskText);

        // Add delete button to task list item
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.addEventListener("click", function() {
            newTask.remove();
        });
        newTask.appendChild(deleteBtn);

        // Add new task to task list
        const taskList = document.getElementById("taskList");
        taskList.appendChild(newTask);

        // Clear the input field
        taskInput.value = "";
    }
});