var styles = [
  {
    featureType: "landscape",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    stylers: [
      {
        hue: "#00aaff"
      },
      {
        saturation: -100
      },
      {
        gamma: 2.15
      },
      {
        lightness: 12
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        visibility: "on"
      },
      {
        lightness: 24
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        lightness: 57
      }
    ]
  }
];

function initMap() {
  var mapContainer = document.getElementById("map");

  if (!mapContainer) return;

  var $buttons = $(".js-map-button");
  var $selectedButton = $(".js-map-button-selected");
  var coords = {
    lat: $selectedButton.data("lat"),
    lng: $selectedButton.data("lng")
  };
  var UNSELECTED_BUTTON_CLASS_NAME = "hollow";

  var map = new google.maps.Map(mapContainer, {
    center: coords,
    zoom: 16,
    styles: styles
  });

  var marker = new google.maps.Marker({
    position: coords,
    map: map,
    icon: "/images/pin.svg"
  });

  $buttons.on("click", function(event) {
    var $button = $(event.currentTarget);
    var newCoords = new google.maps.LatLng(
      $button.data("lat"),
      $button.data("lng")
    );

    $buttons.addClass(UNSELECTED_BUTTON_CLASS_NAME);
    $button.removeClass(UNSELECTED_BUTTON_CLASS_NAME);

    map.setCenter(newCoords);
    marker.setPosition(newCoords);
  });
}
