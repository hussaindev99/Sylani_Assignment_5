var input = document.getElementById("input") as HTMLInputElement;
var list = document.getElementById("list") as HTMLUListElement;
var button = document.querySelector("button") as HTMLButtonElement;

function addTodo(): void {
  if (!input || input.value.trim() === "") return;

  var li = document.createElement("li");
  li.textContent = input.value;

  li.onclick = () => li.remove();

  list.appendChild(li);
  input.value = "";
}

button.onclick = addTodo;

input.onkeydown = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    addTodo();
  }
};