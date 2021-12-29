const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
let toDos = [];
const TODOS_KEY = "todos";
//todo리스트 지우기
function deleteToDo(event){
	event.preventDefault();
	const li = event.target.parentElement;
	li.remove();
}

//localStorage에 todo리스트 저장
function saveToDos(){
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//todo리스트 표현하기
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

//todo리스트 입력값 처리
function handleToDoSubmit(event){
	event.preventDefault();
	const newToDo = toDoInput.value;
	toDoInput.value="";
	toDos.push(newToDo);
	paintToDo(newToDo);
	saveToDos();
}

function sayHello(){
	console.log("hello");
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	parsedToDos.forEach(sayHello);
}