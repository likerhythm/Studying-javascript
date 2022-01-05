const todoList = document.querySelector("#todoList");
const todoListSubmitForm = document.querySelector("#todoList-SubmitForm");
const todoInput = todoListSubmitForm.querySelector("input");
let todos = [];
 
//todos배열을 localStorage에 JSON.stringify함수 형태로 저장
function saveTodoList(){
	localStorage.setItem("todo", JSON.stringify(todos));
}

//자바스크립트 상에 요소 만들어서 브라우저에 추가 
function paintTodo(newTodoObj){
	const li = document.createElement("li");
	const span = document.createElement("span");
	const button = document.createElement("button");
	button.addEventListener("click", deleteTodo);
	li.id = newTodoObj.id;
	span.innerText = newTodoObj.element;
	button.innerText = "X";
	li.appendChild(span);
	li.appendChild(button);
	todoList.appendChild(li);
}

//입력 된 todoList를 obj로 가공하여 추가 및 저장
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

//button 클릭 됐을 때 해당 버튼의 상위요소 즉 리스트 하나 삭제
function deleteTodo(event){
	const li = event.target.parentElement;
	li.remove();
	todos = todos.filter((item) => item.id !== parseInt(li.id));
	saveTodoList();
}


todoListSubmitForm.addEventListener("submit", handleTodoSubmit);

//새로고침 해도 리스트가 화면 상에 표시되도록 함
const savedTodo = localStorage.getItem("todo");
if (savedTodo !== null){
	const parsedTodo = JSON.parse(savedTodo);
	todos = parsedTodo;
	parsedTodo.forEach(paintTodo);
}