$.ajax({
  method: "GET",
  url: "/api/Parkings/"
}).then(function(response) {
  // console.log(response)
  function initMap() {
    var center = { lat: 34.052235, lng: -118.243683 };
    var locations = [];
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 9,
      center: center
    });
    var infowindow = new google.maps.InfoWindow({});
    var marker, count;
    for (count = 0; count < locations.length; count++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(
          locations[count][1],
          locations[count][2]
        ),
        map: map,
        title: locations[count][0]
      });
      google.maps.event.addListener(
        marker,
        "click",
        (function(marker, count) {
          return function() {
            infowindow.setContent(locations[count][0]);
            infowindow.open(map, marker);
          };
        })(marker, count)
      );
    }
  }
  initMap();
});
