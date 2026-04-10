"use strict";
var input = document.getElementById("input");
var list = document.getElementById("list");
var button = document.querySelector("button");
function addTodo() {
    if (!input || input.value.trim() === "")
        return;
    var li = document.createElement("li");
    li.textContent = input.value;
    li.onclick = () => li.remove();
    list.appendChild(li);
    input.value = "";
}
button.onclick = addTodo;
input.onkeydown = (event) => {
    if (event.key === "Enter") {
        addTodo();
    }
};
