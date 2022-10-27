
const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const loginButton = document.querySelector("#loginForm button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username)
  greeting.innerText = `환영합니다. ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
};


function paintGreetings(username) {
  greeting.innerText = `환영합니다 ${username}님`; 
  greeting.classList.remove(HIDDEN_CLASSNAME);
  
  //! 사용자 이름에 ${username} 입력.

};

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

