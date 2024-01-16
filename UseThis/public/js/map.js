function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 16, lng: 106},
  zoom: 8,
  styles: [{
      featureType: 'poi',
      stylers: [{ visibility: 'on' }]  // Turn off points of interest.
  }, {
      featureType: 'transit.station',
      stylers: [{ visibility: 'off' }]  // Turn off bus stations, train stations, etc.
  }],
  disableDoubleClickZoom: true,
  streetViewControl: false
  });
  
  closePopup();
}

function closePopup() {
setTimeout(
  function() {
    try {
          var alertText = document.getElementsByTagName("span");
          for (let i = 0; i < alertText.length; i++) {
            if (alertText[i].innerText == "This page can't load Google Maps correctly.") {
              var wrap = alertText[i].parentElement.parentElement;
              var button = wrap.getElementsByTagName("button")[0];
              button.click();
            }
          }
      } catch (error) {
        alert("Map is not loaded");
      }
  }, 1000);
}