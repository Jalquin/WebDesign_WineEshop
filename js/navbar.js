function navCollapse() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive-nav";
    } else {
        x.className = "topnav";
    }
}