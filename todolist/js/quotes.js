const quotes = [
  { quote: "누구에게나 그럴듯한 작전이있다. 한대 맞기 전까지는", author: "마이클 타이슨", },
  { quote: "조개를 부수고 명예를 얻겠다", author: "박종태 ", },
  { quote: "너 자신을 알라", author: "소크라테스", },
  { quote: "끝날 때 까지는 끝난게 아니다", author: "렌디 존슨", },
  { quote: "시작은 미약하였으나, 끝은 창대하리라", author: "성경", },
  { quote: "신은 주사위 놀이를 하지 않는다", author: "아인슈타인", },
  { quote: "이것 또한 지나가리라", author: "솔로몬", },
  { quote: "털 좀 그만 뿌리고 다녀라", author: "채혜수", },
  { quote: "내 자신의 무식을 아는 것은 지식으로의 첫 걸음이다", author: "조지 고든 바이런", },
  { quote: "아는 것을 안다고 하고, 모르는 것을 모른다고 하는것이 아는 것이다.", author: "공자", },

]

const quote = document.querySelector("#quote span:first-child");

const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

//! 명언 랜덤으로 생성.

quote.innerText = todaysQuote.quote; //명언
author.innerText = todaysQuote.author; //명언 저자