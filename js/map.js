// noinspection JSUnusedLocalSymbols
function initMap() {
    const home = {lat: 50.05701601351515, lng: 14.426539758567623};
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