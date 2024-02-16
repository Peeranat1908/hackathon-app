import { MarkerClusterer } from "https://cdn.skypack.dev/@googlemaps/markerclusterer@2.3.1";

async function initMap(locations) {
  console.log(locations)
  // Request needed libraries.
  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker",
  );
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16
    ,
    center: { lat: 13.8485341, lng: 100.5679966 },
    mapId: "DEMO_MAP_ID",
  });
  const infoWindow = new google.maps.InfoWindow({
    content: "",
    disableAutoPan: true,
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "";
  // Add some markers to the map.
  const markers = locations.map((position, i) => {
    const label = labels[i % labels.length];
    const pinGlyph = new google.maps.marker.PinElement({
      glyph: label,
      glyphColor: "white",
    });
    const marker = new google.maps.marker.AdvancedMarkerElement({
      position,
      content: pinGlyph.element,
    });

    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener("click", () => {
      infoWindow.setContent(position.lat + ", " + position.lng);
      infoWindow.open(map, marker);

    });
    return marker;
  });

  // Add a marker clusterer to manage the markers.
  new MarkerClusterer({ map, markers });
}

const cafeteria = document.getElementsByClassName("menu")[0].addEventListener("click", () => initMap([
  { lat: 13.845639864698926, lng: 100.57053636304832 },
  { lat: 13.846237253555342, lng: 100.56971639971428 },
  { lat: 13.848747697163782, lng: 100.56694297798099 }
]));
const stadium = document.getElementsByClassName("menu")[1].addEventListener("click", () =>
initMap([
  {lat: 13.846670041142602,lng: 100.56767803796345},{lat: 13.846922746790023,lng: 100.56690724041066},
  {lat: 13.848516729931843,lng: 100.56600630820492},{lat: 13.84725320761224,lng: 100.56574603890137}
]));
const ATM = document.getElementsByClassName("menu")[2].addEventListener("click", () => initMap([
  { lat: 13.845639864698926, lng: 100.57053636304832 }, {lat: 13.845137253442843,lng: 100.56754905729049}, 
  {lat: 13.84411185566119,lng: 100.56705917340274}, {lat: 13.845056162661933,lng: 100.56554149505715}, 
  {lat: 13.846437479768863,lng: 100.56262931138014}, {lat: 13.84609139879173,lng: 100.56247310383122}
]));
const bus = document.getElementsByClassName("menu")[3].addEventListener("click", () => initMap([
  { lat: 13.848747697163782, lng: 100.56694297798099 }
]));
const cafe = document.getElementsByClassName("menu")[4].addEventListener("click", () => initMap([
  { lat: 13.845639864698926, lng: 100.57053636304832 },
  { lat: 13.846237253555342, lng: 100.56971639971428 },
  { lat: 13.848747697163782, lng: 100.56694297798099 }
]));
initMap();

