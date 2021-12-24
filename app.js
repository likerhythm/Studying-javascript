const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  	event.preventDefault();
	//loginForm 안보이게 하기
  	loginForm.classList.add(HIDDEN_CLASSNAME);
  	const username = loginInput.value;
  	console.log(username);

	//`Hello ${username}` == "Hello" + username
  	greeting.innerText = `Hello ${username}`;
	//인사말 보이게 하기
  	greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);