//html 문서에서 login-form을 id로 가진 div를 js로 가져온다
const loginForm = document.getElementById("login-form");

//login-form에서 input 태그를 가져온다.
//document.querySelector("#login-form input")으로 대체 가능
const loginInput = loginForm.querySelector("input");

//login-form에서 button 태그를 가져온다.
//document.querySelector("#login-form button")으로 대체 가능
const loginButton = loginForm.querySelector("button");

function loginButtonClicked() {
	const username = loginInput.value;
}

loginButton.addEventListener("click", loginButtonClicked);


//input의 유효성 검사를 작동시키기 위해서는 input이 form 안에 있어야 한다.
//form 안에서 엔터를 누르고 input이 더 존재하지 않는다면 자동으로 submit 됨
//form 안에 있는 버튼을 눌렀을 때도 자동으로 submit 됨