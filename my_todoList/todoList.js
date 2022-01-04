const todoList = document.querySelector("#todoList");
const todoListSubmitForm = document.querySelector("#todoList-SubmitForm");
const todoInput = todoListSubmitForm.querySelector("input");
let todos = [];
 
function saveTodoList(){
	localStorage.setItem("todo", JSON.stringify(todos));
}

function paintTodo(newTodoObj){
	const li = document.createElement("li");
	const span = document.createElement("span");
	const button = document.createElement("button");
	li.id = newTodoObj.id;
	span.innerText = newTodoObj.element;
	button.innerText = "X";
	li.appendChild(span);
	li.appendChild(button);
	todoList.appendChild(li);
}

function handleTodoSubmit(event){
	event.preventDefault();
	console.log(event);
	const newTodo = todoInput.value;
	const newTodoObj = {
		element: newTodo,
		id: Date.now(),
	};
	todos.push(newTodoObj);
	todoInput.value = "";
	paintTodo(newTodoObj);
	saveTodoList();
}




todoListSubmitForm.addEventListener("submit", handleTodoSubmit)