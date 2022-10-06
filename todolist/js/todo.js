
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const toDos_key = "toDos";

function saveToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
};

//! 인수로 전달받은 자바스크립트 객체를 문자열로 변환하기 위해
//! JSON.stringify 사용

//! localStorage에 item을 추가하기 위해 setItem 함수 사용.

//* 변수 할당은 RAM에 임시 저장, 브라우저 꺼지면 싹 날아감.

//* localStorage.setItem() 같은 경우는 하드디스크에 저장형태라
//* 브라우저나 PC를 껐다 켜든지 간에 제어판에서 삭제 하기 전까지는 계속 남아있음...?
//! 쿠키라고도 한다.

function deleteTodo(event) {
  const li = event.target.parentElement;
  //! event에서 타겟의 부모요소. << 여기서는 click >>
  li.remove(); //요소 지우는 함수
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

//! filter 는 배열에 사용하며 정해진 값을 추출해준다.

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  li
      .classList
      .add("toDoLi");
  
  //? li.classList
  //? li.add 이런식으로 하면 안되는건가?

  li.style.marginTop = "15px";
  li.style.alignItems = "center";
  li.style.justifyContent = "flexEnd";
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  span.style.fontSize = "15px";
  span.style.color = "white";
  span.style.fontWeight = "bold";
  const button = document.createElement("button");
  button.innerText = "x";
  button
      .classList
      .add("deButton");
  button.style.color = "crimson";
  button.style.fontSize = "17px";
  button.style.fontWeight = "bold";
  button.addEventListener("click", deleteTodo)
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  li.style.marginBottom = "10px";
};

//! 할일 목록 생성, X버튼 생성, 

function handleToDoSubit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
      text: newTodo,
      id: Date.now()
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos()
};

toDoForm.addEventListener("submit", handleToDoSubit);

const savedToDos = localStorage.getItem(toDos_key);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    // toDos = parsedToDos;
    //toDos 배열은 브라우저 시작시 []로 null이기 때문에 로컬스토리지의 내용들을 읽어옴
    parsedToDos.forEach(paintToDo);
};