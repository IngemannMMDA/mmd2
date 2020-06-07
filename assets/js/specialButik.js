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
      draggable: true, // pga iconer skal bør den være true
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
    //var customIcon = {
    //	url: '.SVG/cloudy.svg',
    // scaledSize: new google.maps.Size(90,90),
    // origin: new google.maps.Point(0,0),
    // anker: new google.maps.Point(20,20)
    //}
    
  
    var molle = new google.maps.LatLng(53.9453898, 11.3998485 );
    var fejø = new google.maps.LatLng(54.9453898, 11.3998485 );
    var femø = new google.maps.LatLng(54.9731883, 11.5328826);
    var askø = new google.maps.LatLng(54.9015899, 11.4941195);
    var alle = new google.maps.LatLng(54.932620, 11.483123);
  
  
    var icons = {
        First: {
          icon: '/assets/icons/numbers/marker1.png'
        },
        second: {
          icon: '/assets/icons/numbers/marker2.png'
        },
        third: {
          icon: '/assets/icons/numbers/marker3.png'
        },
        forth: {
          icon: '/assets/icons/numbers/marker4.png'
        },
        fifth: {
          icon: '/assets/icons/numbers/marker5.png'
        },
        sixth: {
          icon: '/assets/icons/numbers/marker6.png'
        },
        seventh: {
          icon: '/assets/icons/numbers/marker7.png'
        }
      };
    
  
    var featuresOplevelser = [
      {
        position: new google.maps.LatLng(54.8864556, 11.4844868), // Askø kunst
        type: 'First',
        info: "Askø kunst",
        content: '<div>Hello wrold this is content for møllen</div>'
        }, {
        position: new google.maps.LatLng(54.948806, 11.3856523), // Fejø laks og røgeri
        type: 'second',
        info: "Fejø laks og røgeri",
        content: '<div>Askø Strand</div>'
      }, {
        position: new google.maps.LatLng(54.9511258, 11.4276742), // Letkøb Fejø
        type: 'third',
        info: "Letkøb Fejø",
        content: '<div>lerbakkevej</div>'
      }, {
        position: new google.maps.LatLng(54.9470996, 11.4625694), // Fejø cider
        type: 'forth',
        info: "Fejø cider",
        content: '<div>Fejø kajakhus</div>'
      }, {
        position: new google.maps.LatLng(54.9726991, 11.5120735), // Det gule magasin
        type: 'fifth',
        info: "Det gule magasin",
        content: '<div>Femø Strand</div>'
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
  
  
   
  
  
  
    // var IslandName = document.getElementsByClassName("filter-btn").value;
    // eventlistener if click on btn then switch
  
    document.getElementById("fejø-btn").addEventListener("click", function () {
      console.log("changing to Fejø");
      mapLocation = map.setCenter(new google.maps.LatLng(54.9453898, 11.3998485));
      changeMarkerPosition(fejø);
      onlyThis();
      
    
    });
  
    document.getElementById("femø-btn").addEventListener("click", function () {
      console.log("changing to Femø");
      mapLocation = map.setCenter(new google.maps.LatLng(54.9731883, 11.5328826));
      changeMarkerPosition(femø);
      onlyThis();
      
    });
      
  
    document.getElementById("askø-btn").addEventListener("click", function () {
      console.log("changing to Askø");
      mapLocation = map.setCenter(new google.maps.LatLng(54.8932062, 11.4891612));
      changeMarkerPosition(askø);
      onlyThis();
    });
  
    document.getElementById("alle-btn").addEventListener("click", function () {
      console.log("changing to Alle");
      mapLocation = map.setCenter(new google.maps.LatLng(54.932620, 11.483123));
      changeMarkerPosition(alle);
      onlyThis();
    });
  
    function changeMarkerPosition(Theposition) { // Flytter markeren til den specifikke ø.
      var latlng = Theposition;
      marker.setPosition(latlng);
  }
  // document.getElementsByClassName("menuOptions").addEventListener("click", function() {
    
    
  // });
  }