const OuterLandsButtonIsPressed = document.getElementById('OuterLandsButton');
const CreativeButtonIsPressed = document.getElementById('CreativeButton');
const Map = document.getElementById("MapUpdating");

var MapLink = "https://outerlands.cinderquest.net"

OuterLandsButtonIsPressed.addEventListener('click', function() {

    MapLink = "https://outerlands.cinderquest.net";
    Map.src = MapLink;

    OuterLandsButtonIsPressed.style.color = '#ffff00';
    CreativeButtonIsPressed.style.color = '#ffffff';
})

CreativeButtonIsPressed.addEventListener('click', function() {

    MapLink = "https://creative.cinderquest.net";
    Map.src = MapLink;

    OuterLandsButtonIsPressed.style.color = '#ffffff';
    CreativeButtonIsPressed.style.color = '#ffff00';
    
})