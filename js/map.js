// noinspection JSUnusedLocalSymbols
function initMap() {
    const home = {lat: 50.08238315508033, lng: 14.424978247267617};
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: home,
    });
    // noinspection JSUnusedLocalSymbols
    const marker = new google.maps.Marker({
        position: home,
        map: map,
    });
}