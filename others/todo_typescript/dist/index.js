import Todo from "./Todo.js";
var textinput = document.getElementById('textinput');
var button = document.getElementById('addButton');
var lists = document.querySelector('.lists');
var draggable = document.querySelector('.draggable');
var droppable = document.querySelector('.droppable');
document.addEventListener("load", function () {
    console.log("hello");
});
var todos = [];
console.log(button.textContent);
button.addEventListener("click", function (e) {
    console.log("adding");
    e.preventDefault();
    var todo = new Todo(textinput === null || textinput === void 0 ? void 0 : textinput.value);
    todo.add(lists, todos);
    textinput.value = "";
});
draggable.addEventListener('drag', function (e) {
    console.log(e);
});
// draggable.ondrag((e: DragEvent)=> {
//     console.log(e);
// })
