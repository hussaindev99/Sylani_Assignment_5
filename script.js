"use strict";
window.addEventListener("DOMContentLoaded", () => {
    var input = document.getElementById("input");
    var list = document.getElementById("list");
    var button = document.querySelector("button");
    function addTodo() {
        if (input.value.trim() === "")
            return;
        var li = document.createElement("li");
        li.textContent = input.value;
        li.onclick = () => li.remove();
        list.appendChild(li);
        input.value = "";
    }
    // button click
    button.addEventListener("click", addTodo);
    // enter press
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            addTodo();
        }
    });
});
