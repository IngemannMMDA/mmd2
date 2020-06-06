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
      map: map
      //icon: customIcon    hvis man vil have sit eget icon
  
    })
    //var customIcon = {
    //	url: '.SVG/cloudy.svg',
    // scaledSize: new google.maps.Size(90,90),
    // origin: new google.maps.Point(0,0),
    // anker: new google.maps.Point(20,20)
    //}
    
  // });
  }