
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");


const API_KEY = "1542a3bda775e77ce7a425e5e168fe82";

function Daejeon(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  //?metric =  섭씨,  imperial = 화씨
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name; 
      weather.innerText = `${data.main.temp}°C - ${data.weather[0].main}。`
    });
};

function DaejeonError() {
    // alert("can't find you.")
};
navigator.geolocation.getCurrentPosition(Daejeon, DaejeonError);