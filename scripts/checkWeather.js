function checkWeather(data){
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    const weatherIcon = document.querySelector(".weather-icon");

    if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    } else if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    } else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    } else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
}

export default checkWeather;