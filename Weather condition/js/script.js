const search_Box = document.querySelector(".searchBOX");
const btn = document.querySelector("button");
const cityName = document.querySelector(".city_Name");
const imgCont = document.querySelector(".picture");
const temp = document.querySelector("#temp");
const humidity = document.querySelector("#humidity");
const humidityTemp = document.querySelector("#humidityTemp");
const wind = document.querySelector("#wind");
const windTemp = document.querySelector("#windTemp");
const condition = document.querySelector(".condition");
const error_Container = document.querySelector(".errorCont");
const err_Img = document.querySelector(".errImg")
const weather_Info = document.querySelector(".weatherInfo");
const WCont = document.querySelector(".weatherCont");
const searchErrNote = document.querySelector("#errNote");

async function getWeather(city) {
    const city_Value = search_Box.value;

    if (city_Value === "") {
        alert("Enter a city name!!");
    }
         const api_Key = "926854b0340d02c1841c435341b9be78";

         const base_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}&units=metric`;

        const checkData = await fetch(base_URL)
         .then((response) => response.json())

         if (checkData.cod === `404`) {
            error_Container.style.display = "flex";
            err_Img.src = "Assets/Error.png";
            err_Img.style.display = "flex"
            weather_Info.style.display = "none";
            cityName.style.display = "none";
            // console.log("error")
            return;
         }
         
            console.log("run")
            error_Container.style.display = "none";
            weather_Info.style.display = "flex"
            WCont.style.display = "block"
            cityName.style.display = "inline"
        cityName.innerHTML = [checkData.name]
        temp.innerHTML = [checkData.main.temp] + "<sup>&deg;C"
        humidityTemp.innerHTML = [checkData.main.humidity] + "&percnt;"
        humidityTemp.style.color = "coralblue"
        humidity.innerHTML = "Humidity:" 
        humidity.style.textDecoration = "underline";
        windTemp.innerHTML = [checkData.wind.speed] +"&deg;"
        wind.innerHTML = "Wind Speed:"
        wind.style.textDecoration = "underline"
        condition.innerHTML = [checkData.weather[0].description]

        switch (checkData.weather[0].main) {
                case `Clouds` :
                    imgCont.src = "Assets/Clouds.png";
                break;
                case `Sunny` :
                    imgCont.src = "Assets/sunnyweather.png";
                case `Haze` :
                    imgCont.src = "Assets/Haze.png";
                break;
                case `Mist` :
                    imgCont.src = "Assets/Mist.png";
                break;
                case `Rain` :
                    imgCont.src = "Assets/Rain.png";
                break;
                case `Snow` :
                    imgCont.src = "Assets/Snow.png";
                break;
                case `Night` :
                    imgCont.src = "Assets/Night.png";
                break;
                case `Clear` : 
                    imgCont.src = "Assets/Clear.png"
                break;
                case `Smoke` :
                    imgCont.src = "Assets/Smoke.png"
                break;
                case `Fog` :
                    imgCont.src = "Assets/Fog.png"
                break;
        }

        console.log(checkData)
    }

btn.addEventListener("click", () => {
    getWeather(search_Box.value)
});
