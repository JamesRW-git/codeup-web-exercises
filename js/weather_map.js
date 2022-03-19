"use strict";

const options = {method: 'GET', headers: {Accept: 'application/json'}};
//New Orleans is LAT: 29.97 LON: -90.08
let lat = 29.97;
let lon = -90.08;
let units = 'imperial'
//Default Weather Image
let weatherDisplay;
let windDirection;
let currentWindAzimuth;
//could add together in the address to even further programmatically do this
fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${OWM_key}`)
    //no semicolons until the end because we're chaining
    .then(response => response.json())
    //arrow function must have curly braces if you have more than one line of code in the body
    .then(response => getSanitizedData(response))
    .then(data => renderTodaysForecast(data))
    .catch(err => console.error(err));

//Sanitizes data from API request
function getSanitizedData(dataBody) {
    console.log(dataBody)
    return {
        name: dataBody.alerts[0].sender_name,
        currentTemp: dataBody.current.temp,
        todayForecastMaxTemp: dataBody.daily[0].temp.max,
        todayForecastMinTemp: dataBody.daily[0].temp.min,
        today: timeConverter(dataBody.daily[0].dt),
        currentWeatherType: dataBody.current.weather[0].main,
        currentWindAzimuth: dataBody.current.wind_deg
        // todayPlus1MaxTemp: dataBody.daily[1].temp.max,
        // todayPlus1MinTemp: dataBody.daily[1].temp.min,
        // todayPlus1: timeConverter(dataBody.daily[1].dt),
        // todayPlus2MaxTemp: dataBody.daily[2].temp.max,
        // todayPlus2MinTemp: dataBody.daily[2].temp.min,
        // todayPlus2: timeConverter(dataBody.daily[2].dt),
        // todayPlus3MaxTemp: dataBody.daily[3].temp.max,
        // todayPlus3MinTemp: dataBody.daily[3].temp.min,
        // todayPlus3: timeConverter(dataBody.daily[3].dt),
        // todayPlus4MaxTemp: dataBody.daily[4].temp.max,
        // todayPlus4MinTemp: dataBody.daily[4].temp.min,
        // todayPlus4: timeConverter(dataBody.daily[4].dt)
    };
}

//Converts UNIX timestamp to Day Month Year format
function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month + ' ' + year;
    return time;
}

//Converts wind direction from azimuth to English
function convertWindDirection(azimuth) {
    windDirection = `${currentWindAzimuth}`;
    if(azimuth >= 0 && azimuth <= 22.5) {
        return windDirection = 'North';
    } else if (azimuth > 22.5 && azimuth <= 45) {
        return windDirection = 'North-northeast';
    } else if (azimuth > 45 && azimuth <= 67.5) {
        return windDirection = 'Northeast';
    } else if (azimuth > 67.5 && azimuth <= 90) {
        return windDirection = 'East-northeast';
    } else if (azimuth > 90 && azimuth <= 112.5) {
        return windDirection = 'East';
    } else if (azimuth > 112.5 && azimuth <= 135) {
        return windDirection = 'East-southeast';
    } else if (azimuth > 135 && azimuth <= 157.5) {
        return windDirection = 'Southeast';
    } else if (azimuth > 157.5 && azimuth <= 180) {
        return windDirection = 'South-southeast';
    } else if (azimuth > 180 && azimuth <= 202.5) {
        return windDirection = 'South';
    } else if (azimuth > 202.5 && azimuth <= 225) {
        return windDirection = 'Southwest';
    } else if (azimuth > 225 && azimuth <= 247.5) {
        return windDirection = 'West-southwest';
    } else if (azimuth > 247.5 && azimuth <= 270) {
        return windDirection = 'West';
    } else if (azimuth > 270 && azimuth <= 292.5) {
        return windDirection = 'West-northwest';
    } else if (azimuth > 292.5 && azimuth <= 315) {
        return windDirection = 'Northwest';
    } else if (azimuth > 315 && azimuth <= 337.5) {
        return windDirection = 'North-northwest';
    } else if (azimuth > 337.5 && azimuth <= 360) {
        return windDirection = 'North';
    }
}

//Converts weather type to corresponding image
function convertWeatherTypeToImg(weatherType) {
    if(weatherType === 'Clear') {
        weatherDisplay = `<img src="/pictures_and_stuff/clear.webp" alt="sunny day with a pretty sunflower">`
    } else if (weatherType === 'Thunderstorm') {
        weatherDisplay = `<img src="/pictures_and_stuff/thunderstorm.jpeg" alt="thunderstorm over a cabin">`
    } else if (weatherType === 'Drizzle') {
        weatherDisplay = `<img src="/pictures_and_stuff/drizzle.webp" alt="rain into a man's hand">`
    } else if (weatherType === 'Rain') {
        weatherDisplay = `<img src="/pictures_and_stuff/rain.jpeg" alt="rain into a puddle">`
    } else if(weatherType === 'Snow') {
        weatherDisplay = `<img src="/pictures_and_stuff/snow.jpeg" alt="snowy cabins">`
    } else if(weatherType === 'Fog') {
        weatherDisplay = `<img src="/pictures_and_stuff/fog.jpeg" alt="foggy forest">`
    } else if(weatherType === 'Mist') {
        weatherDisplay = `<img src="/pictures_and_stuff/mist.jpeg" alt="mist">`
    } else if(weatherType === 'Smoke') {
        weatherDisplay = `<img src="/pictures_and_stuff/smoke.webp" alt="smoke">`
    } else if(weatherType === 'Haze') {
        weatherDisplay = `<img src="/pictures_and_stuff/haze.jpeg" alt="hazy woods">`
    } else if(weatherType === 'Dust' || forecast.currentWeatherType === 'Sand') {
        weatherDisplay = `<img src="/pictures_and_stuff/dust.jpeg" alt="dusty area">`
    } else if(weatherType === 'Ash') {
        weatherDisplay = `<img src="/pictures_and_stuff/ash.jpeg" alt="volcanic ash">`
    } else if(weatherType === 'Squall') {
        weatherDisplay = `<img src="/pictures_and_stuff/squall.jpeg" alt="squall">`
    } else if(weatherType === 'Tornado') {
        weatherDisplay = `<img src="/pictures_and_stuff/tornado.webp" alt="tornado">`
    } else if(weatherType === 'Clouds') {
        weatherDisplay = `<img src="/pictures_and_stuff/clouds.jpeg" alt="clouds">`
    }
}

function renderTodaysForecast(forecast) {
    //Selects picture to display for current weather
    convertWeatherTypeToImg(`${forecast.currentWeatherType}`)
    //Converts wind direction for current weather
    convertWindDirection(`${forecast.currentWindAzimuth}`)
    $('#locationName').append(`
    <div class="card" style="width: 18rem;">
        ${weatherDisplay}
        <div class="card-body">
            <h3 class="card-text">Current Weather in ${forecast.name}</h3>
            <p class="card-text">Current Temperature is ${forecast.currentTemp}°F</p>
            <p class="card-text">Current Wind Direction is ${windDirection}</p>
        </div>
    </div>`
    )
}
    // <div>
    //     <h3>Forecast for ${forecast.name}</h3>
    //     <p>Current Temperature is ${forecast.currentTemp} Fahrenheit</p>
    // </div>
    // <div>
    //     <h3>Forecast for Today ${forecast.today}</h3>
    //     <p>High Temperature: ${forecast.todayForecastMaxTemp}°F</p>
    //     <p>Low Temperature: ${forecast.todayForecastMinTemp}°F</p>
    // </div>


// <div style="background-color: royalblue" class="cardTypeThing">
//     <h3>Forecast for ${forecast.todayPlus1}</h3>
//     <p>High Temperature: ${forecast.todayPlus1MaxTemp}°F</p>
//     <p>Low Temperature: ${forecast.todayPlus1MinTemp}°F</p>
// </div>
// <div style="background-color: darkolivegreen" class="cardTypeThing">
//     <h3>Forecast for ${forecast.todayPlus2}</h3>
//     <p>High Temperature: ${forecast.todayPlus2MaxTemp}°F</p>
//     <p>Low Temperature: ${forecast.todayPlus2MinTemp}°F</p>
// </div>
// <div style="background-color: royalblue" class="cardTypeThing">
//     <h3>Forecast for ${forecast.todayPlus3}</h3>
//     <p>High Temperature: ${forecast.todayPlus3MaxTemp}°F</p>
//     <p>Low Temperature: ${forecast.todayPlus3MinTemp}°F</p>
// </div>
// <div style="background-color: darkolivegreen" class="cardTypeThing">
//     <h3>Forecast for ${forecast.todayPlus4}</h3>
//     <p>High Temperature: ${forecast.todayPlus4MaxTemp}°F</p>
//     <p>Low Temperature: ${forecast.todayPlus4MinTemp}°F</p>
// </div>



