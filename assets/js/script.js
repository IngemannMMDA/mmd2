// JavaScript Document

// api.openweathermap.org/data/2.5/weather?q=london&appid=e352705e1d58913e65b917cc9d5164b9
const WPurl = 'api.openweathermap.org/data/2.5/weather?q=aalborg&appid='; // Andreas wather api url
const WPkey = 'e352705e1d58913e65b917cc9d5164b9'; // Andreas weather api key




loadPage();


function loadPage() {
    // turn on the spinner

    console.log("Hello?");


    getData(); // henter openweathermap.org DATA
}




function getData() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.responseText);
            console.log(data);


            // console.log(data.explanation);
            // fører koden videre til en function ved navn renderInfoWP
            //renderInfo(data);
            renderWeather(data);
        }
    }
    // xhttp.open('GET', `${WPurl}posts/?tags=${postInfoId}`, true);
    xhttp.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=Aalborg&units=metric&appid=e352705e1d58913e65b917cc9d5164b9`, true);
    //xhttp.open('GET', `${WPurl}${WPkey}`, true);
    xhttp.send();
}





//  xhttp.open('GET', `${WPurl}?api_key=${WPkey}`, true);
//function renderInfo(data){ // billede

// <img src="https://openweathermap.org/img/w/${data.weather.icon}@2x.png">


function renderWeather(data) { // starter Render funktionen. Alt bliver renderet i querySelector elementet.
    document.querySelector('#vejrAPI').innerHTML = `
    <div class="temp">
        <p>${Math.round(data.main.temp)}&#8451</p>
    </div>
    <div class="tempIcon">
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">  
    </div>
    `;
// Math.round() Runder tallet op.
}