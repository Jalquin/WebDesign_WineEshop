document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById("myRange");
    const output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
    }
}, false);

function sortColapse() {
    const x = document.getElementById("Colapse");
    if (x.className === "colapse") {
        x.className += " colapse-open";
    } else {
        x.className = "colapse";
    }
}