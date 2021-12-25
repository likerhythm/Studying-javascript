const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//처음 로그인할 때(localStorage에 저장되지 않았을 때)
function onLoginSubmit(event) {
  	event.preventDefault();
	//loginForm 안보이게 하기
  	loginForm.classList.add(HIDDEN_CLASSNAME);
  	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
  	console.log(username);
	paintGreetings(username)
}

function paintGreetings(username){
	greeting.innerText = `Hello ${username}`;
  	greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("USERNAME_KEY");
console.log(`savedUsername: ${savedUsername}`);
if (savedUsername === null){
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
}else{
	paintGreetings(savedUsername);
}