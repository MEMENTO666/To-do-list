
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

