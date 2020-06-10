// JavaScript Document

loadPage();

function loadPage() {

  console.log("Hello? script 2");
  initMap();

}

function initMap() {

  //var fejoCords = {lat: 54.9, lng: 11.483123};
  var mapLocation = { lat: 54.932620, lng: 11.483123 }; // The location

  // mapLocation = fejoCords;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11.60, // Hvor meget kortet er zoomet ind
    center: mapLocation,
    draggable: true, // pga iconer bør den være true
    disableDefaultUI: true,
    zoomControl: true,

    // mapTypeId: 'satellite'
    styles: [ // Styling start
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
    ] // Styling slut
  });

  var marker = new google.maps.Marker({
    position: mapLocation,
    // map: map er væk så rød pointer ikke vises på denne side
  })

  var molle = new google.maps.LatLng(53.9453898, 11.3998485);
  var fejø = new google.maps.LatLng(54.9453898, 11.3998485);
  var femø = new google.maps.LatLng(54.9731883, 11.5328826);
  var askø = new google.maps.LatLng(54.9015899, 11.4941195);
  var alle = new google.maps.LatLng(54.932620, 11.483123);

  var icons = {
    First: {
      icon: 'assets/icons/numbers/marker1.png'
    },
    second: {
      icon: 'assets/icons/numbers/marker2.png'
    },
    third: {
      icon: 'assets/icons/numbers/marker3.png'
    },
    forth: {
      icon: 'assets/icons/numbers/marker4.png'
    },
    fifth: {
      icon: 'assets/icons/numbers/marker5.png'
    },
    sixth: {
      icon: 'assets/icons/numbers/marker6.png'
    },
    seventh: {
      icon: 'assets/icons/numbers/marker7.png'
    }
  };

  var featuresOplevelser = [
    {
      position: new google.maps.LatLng(54.8978138, 11.49466), // Det gamle mejeri
      type: 'First',
      info: "Det gamle mejeri",
      content: '<div>Det gamle mejeri </div>'
    }, {
      position: new google.maps.LatLng(54.8932775, 11.5021803), // Minihuse på Askø
      type: 'second',
      info: "Minihuse på Askø",
      content: '<div>Minihuse på Askø</div>'
    }, {
      position: new google.maps.LatLng(54.973511, 11.5567933), // Femø camping
      type: 'third',
      info: "Fasangården telt og naturplads",
      content: '<div>Fasangården telt og naturplads</div>'
    }, {
      position: new google.maps.LatLng(54.9811568, 11.5330299), // Femø Bed & Breakfast
      type: 'forth',
      info: "Femø Bed & Breakfast",
      content: '<div>Femø Bed & Breakfast</div>'
    }
  ];

  // skal loades i html'en der passer til og give en parameter som matcher det JSON der skal bruges oven over
  function onlyThis() {

    for (var i = 0; i < featuresOplevelser.length; i++) {
      var oermarker = new google.maps.Marker({
        position: featuresOplevelser[i].position,
        icon: icons[featuresOplevelser[i].type].icon,
        map: map,
        title: featuresOplevelser[i].info,
      });
    };
  }

  onlyThis();

  document.getElementById("fejø-btn").addEventListener("click", function () {
    console.log("changing to Fejø");
    mapLocation = map.setCenter(new google.maps.LatLng(54.9453898, 11.3998485));
    // changeMarkerPosition(fejø);

  });

  document.getElementById("femø-btn").addEventListener("click", function () {
    console.log("changing to Femø");
    mapLocation = map.setCenter(new google.maps.LatLng(54.9731883, 11.5328826));
    // changeMarkerPosition(femø);

  });

  document.getElementById("askø-btn").addEventListener("click", function () {
    console.log("changing to Askø");
    mapLocation = map.setCenter(new google.maps.LatLng(54.8932062, 11.4891612));
    // changeMarkerPosition(askø);

  });

  document.getElementById("alle-btn").addEventListener("click", function () {
    console.log("changing to Alle");
    mapLocation = map.setCenter(new google.maps.LatLng(54.932620, 11.483123));
    // changeMarkerPosition(alle);

  });

  function changeMarkerPosition(Theposition) { // Flytter markeren til den specifikke ø.
    var latlng = Theposition;
    marker.setPosition(latlng);
  }
}