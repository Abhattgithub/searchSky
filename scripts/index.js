import apiKey from "./apiKey.js";
import checkWeather from "./checkWeather.js";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


async function checkInput(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else 
        checkWeather(data);
}

searchBtn.addEventListener("click", ()=>{checkInput(searchBox.value);})    
searchBox.addEventListener('keypress',  (e) => {
    if (e.key === 'Enter') {
        checkInput(searchBox.value);
    }
});
