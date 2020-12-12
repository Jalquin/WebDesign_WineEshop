function infoCollapse() {
    const x = document.getElementById("Collapse");
    if (x.className === "collapse") {
        x.className += " collapse-open";
    } else {
        x.className = "collapse";
    }
}