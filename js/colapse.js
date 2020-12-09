function infoColapse() {
    const x = document.getElementById("Colapse");
    if (x.className === "colapse") {
        x.className += " colapse-open";
    } else {
        x.className = "colapse";
    }
}