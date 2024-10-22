import TaskManager from "./app/TaskManager.js";

document
  .getElementById("todo-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("test");
  });