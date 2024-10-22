export default class TaskManager {
  #tasks = [];

  constructor() {}

  get tasks() {
    return this.#tasks;
  }

  addTask(task) {
    this.#tasks.push(task);
  }

  deleteTask(id) {
    this.#tasks = this.#tasks.filter(t => t.id !== id);
  }

  updateTask(id, title) {}

  renderTasks() {
    let display = "";
    this.#tasks.forEach((task) => {
      display += `<li class="py-4">
            <div class="flex items-center">
                <input id="todo1" name="todo1" type="checkbox"
                    class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded">
                <label for="todo1" class="ml-3 block text-gray-900">
                    <span class="text-lg font-medium">${task["title"]}</span>
                    <span class="text-sm font-light text-gray-500">Due on 4/1/23</span>
                </label>
            </div>
        </li>`;
    });
    console.log(display);
    return display;
  }
}
