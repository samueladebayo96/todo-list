export default class TaskList {
  #content;
  constructor(content) {
    this.#content = content;
  }

  get content() {
    return this.#content;
  }

  set content(content) {
    this.#content = content;
  }

  addContent() {
    let temp = ""
    const todoList = document.getElementById("todoList");
    let li = document.createElement("li");
    li.className = "py-4";
    let div = document.createElement("div");
    div.className = "bg-teal-500 rounded-lg px-4 py-4 flex items-center justify-between";
    let span = document.createElement("span");
    span.className = "text-lg font-medium text-white";
    span.textContent = this.#content;
    let div2 = document.createElement("div");
    div2.className = "flex gap-2";
    let button = document.createElement("button");
    button.id = "updateButton";
    button.innerHTML = `<i class="fa-solid fa-pen border-2 border-[#FF9547] rounded-lg p-1 text-[#FF9547]"></i>`;
    let button2 = document.createElement("button");
    button2.id = "removeButton";
    button2.innerHTML = `<i class="fa-solid fa-trash border-2 border-[#FF9547] rounded-lg p-1 text-[#FF9547]"></i>`;
    div2.appendChild(button);
    div2.appendChild(button2);
    div.appendChild(span);
    div.appendChild(div2);
    li.appendChild(div);
    todoList.appendChild(li);
    temp = todoList.innerHTML;
    console.log(temp)
    return `<li class="py-4">
      <div
            class="bg-teal-500 rounded-lg px-4 py-4 flex items-center justify-between"
          >
            <span class="text-lg font-medium text-white">${this.#content}</span>
            <div class="flex gap-2">
              <button id="updateButton">
                <i class="fa-solid fa-pen border-2 border-[#FF9547] rounded-lg p-1 text-[#FF9547]"></i>
              </button>
              <button  id="removeButton">
                <i class="fa-solid fa-trash border-2 border-[#FF9547] rounded-lg p-1 text-[#FF9547]"></i>
              </button>
            </div>
          </div>
          </li>`
  }
}
