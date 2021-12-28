const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function deleteToDo(event){
	event.preventDefault();
	const li = event.target.parentElement;
	li.remove();
}

function paintToDo(newTodo){
	const li = document.createElement("li");
	const span = document.createElement("span");
	const button = document.createElement("button");
	span.innerText = newTodo;
	button.innerText = "X";
	button.addEventListener("click", deleteToDo);
	li.appendChild(span);
	li.appendChild(button);
	toDoList.appendChild(li);
}

function handleToDoSubmit(event){
	event.preventDefault();
	const newToDo = toDoInput.value;
	toDoInput.value="";
	paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);