
const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const loginButton = document.querySelector("#loginForm button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username)
  greeting.innerText = `hello ${username}`;
  greeting
}

