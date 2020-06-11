// JavaScript Document

const WPurl = 'api.openweathermap.org/data/2.5/weather?lat=54&lon=11&units=metric&appid='; // Andreas wather api url
const WPkey = 'e352705e1d58913e65b917cc9d5164b9'; // Andreas weather api key

loadPage();

function loadPage() {

  console.log("Script loaded");
  getData();  // henter openweathermap.org DATA
  filterSelection("alle");
  filterButtons();
 
}

function getData() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(this.responseText);
      console.log(data);

      // fører koden videre til en function ved navn renderWeather
      renderWeather(data);
    }
  }
  // xhttp.open('GET', `${WPurl}posts/?tags=${postInfoId}`, true);
  xhttp.open('GET', `https://${WPurl}${WPkey}`, true);
  //xhttp.open('GET', `${WPurl}${WPkey}`, true);
  xhttp.send();
}

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

function filterSelection(KnapParameter) {
  var options, i;
  options = document.getElementsByClassName("menuOptions");
  if (KnapParameter == "alle") KnapParameter = "";
  for (i = 0; i < options.length; i++) {
    removeClass(options[i], "show");
    if (options[i].className.indexOf(KnapParameter) > -1) addClass(options[i], "show");
  }

}

// Learned from W3Schools.com - start
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

function filterButtons() {
  var btnBox = document.getElementById("menu-filter-Id");
  var btns = btnBox.getElementsByClassName("filter-btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  // Learned from W3Schools.com - end
}
