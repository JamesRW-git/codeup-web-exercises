"use strict";

const options = {method: 'GET', headers: {Accept: 'application/json'}};
//New Orleans is LAT: 29.97 LON: -90.08
let lat = 29.97;
let lon = -90.08;
let units = 'imperial'
//could add together in the address to even further programmatically do this
fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${OWM_key}`)
    //no semicolons until the end because we're chaining
    .then(response => response.json())
    //arrow function must have curly braces if you have more than one line of code in the body
    .then(response => getSanitizedData(response))
    .then(data => renderTodaysForecast(data))
    .catch(err => console.error(err));

function getSanitizedData(dataBody) {
    return {
        name: dataBody.alerts[0].sender_name,
        currentTemp: dataBody.current.temp,
        todayForecastMaxTemp: dataBody.daily[0].temp.max,
        todayForecastMinTemp: dataBody.daily[0].temp.min,
        today: timeConverter(dataBody.daily[0].dt),
        todayPlus1MaxTemp: dataBody.daily[1].temp.max,
        todayPlus1MinTemp: dataBody.daily[1].temp.min,
        todayPlus1: timeConverter(dataBody.daily[1].dt),
        todayPlus2MaxTemp: dataBody.daily[2].temp.max,
        todayPlus2MinTemp: dataBody.daily[2].temp.min,
        todayPlus2: timeConverter(dataBody.daily[2].dt),
        todayPlus3MaxTemp: dataBody.daily[3].temp.max,
        todayPlus3MinTemp: dataBody.daily[3].temp.min,
        todayPlus3: timeConverter(dataBody.daily[3].dt),
        todayPlus4MaxTemp: dataBody.daily[4].temp.max,
        todayPlus4MinTemp: dataBody.daily[4].temp.min,
        todayPlus4: timeConverter(dataBody.daily[4].dt)
    };
}

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month + ' ' + year;
    return time;
}

function renderTodaysForecast(forecast) {
    $('#locationName').append(`
    <div style="background-color: slategray">
        <h3>Forecast for ${forecast.name}</h3>
        <p>Current Temperature is ${forecast.currentTemp} Fahrenheit</p>
    </div>
    <div style="background-color: darkolivegreen">
        <h3>Forecast for Today: ${forecast.today}</h3>
        <p>High Temperature: ${forecast.todayForecastMaxTemp}</p>
        <p>Low Temperature: ${forecast.todayForecastMinTemp}</p>
    </div>
    <div style="background-color: royalblue">
        <h3>Forecast for ${forecast.todayPlus1}</h3>
        <p>High Temperature: ${forecast.todayPlus1MaxTemp}</p>
        <p>Low Temperature: ${forecast.todayPlus1MinTemp}</p>
    </div>
    <div style="background-color: darkolivegreen">
        <h3>Forecast for ${forecast.todayPlus2}</h3>
        <p>High Temperature: ${forecast.todayPlus2MaxTemp}</p>
        <p>Low Temperature: ${forecast.todayPlus2MinTemp}</p>
    </div>
    <div style="background-color: royalblue">
        <h3>Forecast for ${forecast.todayPlus3}</h3>
        <p>High Temperature: ${forecast.todayPlus3MaxTemp}</p>
        <p>Low Temperature: ${forecast.todayPlus3MinTemp}</p>
    </div>
    <div style="background-color: darkolivegreen">
        <h3>Forecast for ${forecast.todayPlus4}</h3>
        <p>High Temperature: ${forecast.todayPlus4MaxTemp}</p>
        <p>Low Temperature: ${forecast.todayPlus4MinTemp}</p>
    </div>`
    )
}


