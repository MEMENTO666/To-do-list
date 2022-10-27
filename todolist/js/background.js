

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
  "https://bnetcmsus-a.akamaihd.net/cms/blog_header/ki/KI5Z7EH68HEA1589910860503.jpg",

  "https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/2PCH8OTFJNZO1589912853448.jpg",

  "https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/VDQ10E2VMI9T1589912855089.jpg",

  "https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/8CWRD8QS6L2G1589912849876.jpg",


  "https://t1.daumcdn.net/cfile/tistory/99D624505DF873581A?original",

  "https://t1.daumcdn.net/cfile/tistory/998AF2425DF8736203?original",

  "https://t1.daumcdn.net/cfile/tistory/99DB344D5DF8739620?original",
  ]
  
  const randomBG = Math.floor(Math.random() * BG_List.length);

  bg.style.backgroundImage = `url(${BG_List[randomBG]})`;