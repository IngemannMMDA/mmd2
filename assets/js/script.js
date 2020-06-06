// JavaScript Document

// api.openweathermap.org/data/2.5/weather?q=london&appid=e352705e1d58913e65b917cc9d5164b9
const WPurl = 'api.openweathermap.org/data/2.5/weather?q=aalborg&appid='; // Andreas wather api url
const WPkey = 'e352705e1d58913e65b917cc9d5164b9'; // Andreas weather api key




loadPage();


function loadPage() {
    // turn on the spinner

    console.log("Hello?");

    
    getData(); // henter openweathermap.org DATA
    initMap();
    
    // Showcase sidernes map scroll
    filterSelection("alle");
    filterButtons();
    
    
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

function initMap() {
  
  //var fejoCords = {lat: 54.9, lng: 11.483123};
      var mapLocation = {lat: 54.932620, lng: 11.483123}; // The location
      
     // mapLocation = fejoCords;
      var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11.60, // Hvor meget kortet er zoomet ind
          center: mapLocation,
          draggable: false,
          disableDefaultUI: true,
          zoomControl: true,
          
          // mapTypeId: 'satellite'
          styles: [ // Styling start
              
                  {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [
                      {
                        "color": "#ee5541"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                      {
                        "color": "#feffe9"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "labels.text",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "road.local",
                    "elementType": "labels",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  }
                  
                  
                ] // Styling slut
          
      });
      
      var marker = new google.maps.Marker({
          position: mapLocation,
          map: map
          //icon: customIcon    hvis man vil have sit eget icon
          
      })
      //var customIcon = {
      //	url: '.SVG/cloudy.svg',
      // scaledSize: new google.maps.Size(90,90),
      // origin: new google.maps.Point(0,0),
      // anker: new google.maps.Point(20,20)
      //}
     
  }
  
 
  
  
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("menuOptions");
  if (c == "alle") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
  
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
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
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
}


  

// function changeMarkerPosition(marker) {
//   var mapPointBox = document.getElementById("menu-filter-Id");
// var knapper = mapPointBox.getElementsByClassName("filter-btn");
// knapper[i].addEventListener("click", function(){
//   var latlng = new google.maps.LatLng(40.748774, -73.985763);
//   marker.setPosition(latlng);
// }

// function updatePosition() {
//   latitude = parseInt(document.getElementById('latitude').value, 10);
//   longtitude = parseInt(document.getElementById('longtitude').value, 10);
//   myLatlng = new google.maps.LatLng(latitude, longtitude);
//   marker.setPosition(myLatlng);
//   map.setCenter(myLatlng);
// }

