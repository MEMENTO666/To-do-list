const images = [
  "0.png","1.png","2.png"
];

const chosenImage = image[Math.floor(Math.random()*
  images.length
  )];

  //! Math.floor >> 숫자의 소수점 이하의 잘림 처리를 위해 사용.
  //! Math.random >> 여러개의 이미지를 랜덤으로 뽑아내기 위해 사용.

  const bgi = document.createElement("img");

  bgi.src = `img/${chosenImage}`;
  const body = document.querySelector("body");
