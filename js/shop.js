document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById("myRange");
    const output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
    }


    const modalEle = document.querySelector(".img-modal");
    const modalImage = document.querySelector(".img-modalImage");
    Array.from(document.querySelectorAll(".ImgThumbnail")).forEach(item => {
        item.addEventListener("click", event => {
            modalEle.style.display = "block";
            modalImage.src = event.target.src;
        });
    });
    document.querySelector(".modal-img-close").addEventListener("click", () => {
        modalEle.style.display = "none";
    });
}, false);

function sortCollapse() {
    const x = document.getElementById("Colapse");
    if (x.className === "colapse") {
        x.className += " colapse-open";
    } else {
        x.className = "colapse";
    }
}
