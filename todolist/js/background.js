

const images = [
  // "0.jpg",
  "1.jpg",
];

const chosenImage = images[Math.floor(Math.random()*
  images.length)];

  //! Math.floor >> 숫자의 소수점 이하의 잘림 처리를 위해 사용.
  //! Math.random >> 여러개의 이미지를 랜덤으로 뽑아내기 위해 사용.

  const bgi = document.createElement("img");

  bgi.src = `url/${chosenImage}`;
  const body = document.querySelector(".inCenter");

  document.body.style.backgroundImage = bgi;

  //! id,class를 제한하지 않고 css 선택자 body 요소를 찾음.  


