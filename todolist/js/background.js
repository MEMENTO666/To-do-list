

// const images = [
//   // "0.jpg",
//   "1.jpg",
// ];

// const chosenImage = images[Math.floor(Math.random()*
//   images.length)];

//   //! Math.floor >> 숫자의 소수점 이하의 잘림 처리를 위해 사용.
//   //! Math.random >> 여러개의 이미지를 랜덤으로 뽑아내기 위해 사용.

//   const bgi = document.createElement("img");

//   bgi.src = `url/${chosenImage}`;
//   const body = document.querySelector(".inCenter");

//   document.body.style.backgroundImage = bgi;

//   //! id,class를 제한하지 않고 css 선택자 body 요소를 찾음.  


const bg = document.querySelector(".inCenter");


const BG_List = [
  "https://user-images.githubusercontent.com/59393359/74718667-0adb8a80-5276-11ea-8bc3-0e36c67cf28a.jpg",
  "https://user-images.githubusercontent.com/59393359/74718765-30689400-5276-11ea-8a91-dd7ce797074b.jpg",
  "https://user-images.githubusercontent.com/59393359/74718795-3f4f4680-5276-11ea-9f52-58bb99cb2db0.jpg",
  "https://user-images.githubusercontent.com/59393359/74720865-cb16a200-5279-11ea-9318-05e4f75b1106.jpg",
  "https://user-images.githubusercontent.com/59393359/74720904-e2ee2600-5279-11ea-9440-3b3eb9904c22.jpg",
  "https://user-images.githubusercontent.com/59393359/74720910-e41f5300-5279-11ea-9c63-ff84698e3c7f.jpg",
  "https://user-images.githubusercontent.com/59393359/74720914-e4b7e980-5279-11ea-9532-c262caf64f00.jpg"
  ]
  
  const randomBG = Math.floor(Math.random() * BG_List.length);

  bg.style.backgroundImage = `url(${BG_List[randomBG]})`;