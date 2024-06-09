document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function() {
        addTask(taskInput.value);
        taskInput.value = "";
    });

    taskInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            addTask(taskInput.value);
            taskInput.value = "";
        }
    });

    function addTask(task) {
        if (task.trim() === "") return;

        const li = document.createElement("li");
        li.textContent = task;
        
        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.classList.add("completeButton");
        completeButton.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("deleteButton");
        deleteButton.addEventListener("click", function() {
            taskList.removeChild(li);
        });

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
});
