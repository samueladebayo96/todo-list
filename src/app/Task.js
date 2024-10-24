export default class Task {
  #id;
  #title;
  #isCompleted;
  constructor(id, title, isCompleted = false) {
    this.#id = id;
    this.#title = title;
    this.#isCompleted = isCompleted;
  }

  get id() {
    return this.#id;
  }
  get title() {
    return this.#title;
  }
  get isCompleted() {
    return this.#isCompleted;
  }
}
