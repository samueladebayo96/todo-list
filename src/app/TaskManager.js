
import TaskList from "./Components/TaskList.js";

export default class TaskManager {
  #tasks = [];

  constructor() {}

  get tasks() {
    return this.#tasks;
  }

  addTask(task) {
    this.#tasks.push(task);
  }

  removeTask(id) {
    this.#tasks = this.#tasks.filter((t) => t.id !== id);
  }

  updateTask(id, title) {}

  renderTasks() {
    let display = "";
    const todoList = document.getElementById("todoList");
    this.#tasks.forEach((task) => {
      let taskList = new TaskList(task.title);
      display += taskList.addContent();
    });
    todoList.innerHTML = display;

    let removeButton = document.querySelectorAll("#removeButton");
    for (let i = 0; i < removeButton.length; i++) {
      removeButton[i].addEventListener("click", () => {
        removeButton[i].parentElement.parentElement.parentElement.remove();
        this.removeTask(this.#tasks[i].id);
      });
    }
  }
}
