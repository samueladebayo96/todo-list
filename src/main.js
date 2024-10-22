import Task from "./app/Task.js";
import TaskManager from "./app/TaskManager.js";

const taskManager = new TaskManager();

document
  .getElementById("todo-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = getFormData();
    let title = formData["title"];
    const task = new Task(title);
    taskManager.addTask(task);
    const todo_list = document.getElementById("todo-list");
    todo_list.innerHTML = taskManager.renderTasks();
  });

function getFormData() {
  return {
    title: document.getElementById("title").value,
    form: document.getElementById("todo-form"),
    todo_list: document.getElementById("todo-list"),
  };
}
