const inputField = document.querySelector(#todo-input);
const addButton = document.querySelector(#add-button);
const todoList = document.querySelector(#todo-list);

addButton.addEventListener("click", () => {
    const taskText= inputField.value;

    if (taskText.trim() !== "") {
        alert("please add a task")
        return
    }

    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    todoList.appendChild(newTask);
});