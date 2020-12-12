document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById("myRange");
    const output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
    }


    const img_modal = document.querySelector(".img_modal");
    const modalImage = document.querySelector(".img_modalImage");
    Array.from(document.querySelectorAll(".ImgThumbnail")).forEach(item => {
        item.addEventListener("click", event => {
            img_modal.style.display = "block";
            modalImage.src = event.target.src;
        });
    });
    document.querySelector(".modal-img-close").addEventListener("click", () => {
        img_modal.style.display = "none";
    });

    window.onclick = function (event) {
        if (event.target === img_modal) {
            img_modal.style.display = "none";
        }
    }


    const modal = document.querySelector(".modal");
    Array.from(document.querySelectorAll(".cartModal")).forEach(item => {
        item.addEventListener("click", () => {
            modal.style.display = "block";
        });
    });
    document.querySelector(".close").addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}, false);

function sortCollapse() {
    const x = document.getElementById("Collapse");
    if (x.className === "collapse") {
        x.className += " collapse-open";
    } else {
        x.className = "collapse";
    }
}
