const toDoForm = document.querySelector("#todo-form");
const toDoInput = todoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function handleToDoSubmit(event){
	event.preventDefault();
	const newToDo = toDoInput.value;
	toDoInput.value="";
	toD
}

toDoForm.addEventListener("submit", handleToDoSubmit);