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
    if (title !== "") {
      const list = formData["list"];
      const task = new Task(id, title);
      taskManager.addTask(task);
      taskManager.renderTasks();
      id++;
    } else {
      errorMessage("Veuillez ajouter une tâche");
    }
  });

function getFormData() {
  return {
    title: document.getElementById("title").value,
    form: document.getElementById("todoForm"),
    list: document.getElementById("todoList"),
  };
}

function errorMessage(msg) {
  let errorMessage = document.getElementById("errorMessage");
  let span = document.createElement("span");
  errorMessage.appendChild(span);
  errorMessage.innerHTML = msg;
  console.log(errorMessage);
  document.getElementById("errorMessage").style.display = "block";
  setTimeout(() => {
    document.getElementById("errorMessage").style.display = "none";
  }, 5000);
}
