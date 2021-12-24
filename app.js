//html 문서에서 login-form을 id로 가진 div를 js로 가져온다
const loginForm = document.getElementById("login-form");

//login-form에서 input 태그를 가져온다.
//document.querySelector("#login-form input")으로 대체 가능
const loginInput = loginForm.querySelector("input");

//인자로 전달되는 요소를 event 변수로 잡음
function loginSubmit(event) {
	//새로고침을 막아줌
	event.prevendDefault();
	console.log(event);
}

loginForm.addEventListener("submit", loginSubmit);


//브라우저는 submit 동작을 하면 자동으로 새로고침 되도록 설계돼있음
//또한 어떤 이벤트가 발생 했을 때 submit되는 요소를 자동으로 인자로 전달함(코드에서 event 변수)
//새로고침 되는 것을 막아야함
//새로고침이 되는 event가 submit이므로 loginForm에서 submit 이벤트를 감지해야함
//정리하면 loginForm에서 submit 이벤트를 감지하면 새로고침 되는 것을 막고 전달되는 event인자를 잡는다.