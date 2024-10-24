import Task from "./app/Task.js";
import TaskManager from "./app/TaskManager.js";

const taskManager = new TaskManager();
let id = 0;

document
  .getElementById("todoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = getFormData();
    const title = formData["title"];
    const list = formData["list"];
    const task = new Task(id, title);
    taskManager.addTask(task);
    taskManager.renderTasks();
    id++;
  });

function getFormData() {
  return {
    title: document.getElementById("title").value,
    form: document.getElementById("todoForm"),
    list: document.getElementById("todoList"),
  };
}
