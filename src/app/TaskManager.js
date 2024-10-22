import Task from './Task.js';

export default class TaskManager extends Task 
{
    #tasks = [];

    constructor(title) {
        super(title);
    }

    get id() {
        return this.id;
    }

    get title() {
        return this.title;
    }

    set title(newTitle) {
        this.title = newTitle;
    }

    get tasks() {
        return this.#tasks;
    }

    addTask(task) {
    }

    deleteTask(id) {
    }

    updateTask(id, title) {
    }

    renderTasks() {
    }
}