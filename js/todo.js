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
	toDos = toDos.filter((item) => item.id !== parseInt(li.id));
	saveToDos();
}

//localStorage에 todo리스트 저장
function saveToDos(){
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//todo리스트 표현하기
function paintToDo(newTodo){
	const li = document.createElement("li");
	li.id = newTodo.id;
	const span = document.createElement("span");
	const button = document.createElement("button");
	span.innerText = newTodo.text;
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
	const newToDoObj = {
		text: newToDo,
		id: Date.now(),
	}
	toDoInput.value="";
	toDos.push(newToDoObj);
	paintToDo(newToDoObj);
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
	parsedToDos.forEach(paintToDo);
}

//todo리스트 array 완전 초기화 하는 버튼
const clearForm = document.querySelector("#toDoClearForm");
const clearButton = clearForm.querySelector("button");

function toDoClear(event){
	console.log("button clicked");
	toDos = [];
	saveToDos();
}

clearButton.addEventListener("click", toDoClear);