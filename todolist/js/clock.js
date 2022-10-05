
const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
//! 목표길이의 채울값을 정하기 위해 padStart 사용.

getClock(); //실행시 바로 실행
setInterval(getClock,1000);
//! setInterval 특성상 즉시 실행이 안되기 때문에 위의 함수를 추가.

//* 변수 할당은 RAM에 임시 저장, 브라우저 꺼지면 싹 날아감.

//* localStorage.setItem() 같은 경우는 하드디스크에 저장형태라
//* 브라우저나 PC를 껐다 켜든지 간에 제어판에서 삭제 하기 전까지는 계속 남아있음...?
//! 쿠키라고도 한다.