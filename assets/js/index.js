

let barraNavegacion = document.getElementById('nav');

window.addEventListener('scroll', () => {
    let umbralScroll = 100;
    let scroll = window.scrollY > umbralScroll;

    if (scroll) {
        barraNavegacion.classList.add("sticky");
        barraNavegacion.classList.remove("container");
    } else {
        barraNavegacion.classList.remove("sticky");
        barraNavegacion.classList.add("container");
    }
});


barraNavegacion.addEventListener("mouseover", () => {
    if (barraNavegacion.classList.contains("sticky")) {
        barraNavegacion.classList.add("sticky2");
    }
});

barraNavegacion.addEventListener("mouseout", () => {
    barraNavegacion.classList.remove("sticky2");
});
