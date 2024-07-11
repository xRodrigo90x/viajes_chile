


window.addEventListener('scroll', () => {
    let barraNavegacion = document.getElementById('nav');


    let umbralScroll = 100;
    let scroll = window.scrollY > umbralScroll

    if (scroll) {
        barraNavegacion.classList.add("sticky")
        barraNavegacion.classList.remove("container")

        barraNavegacion.addEventListener("mouseover", () => {
            barraNavegacion.classList.add("sticky2");
            
        });

    } else {
        barraNavegacion.classList.remove("sticky")
        barraNavegacion.addEventListener("mouseout", () => {          

                barraNavegacion.classList.remove("sticky2");
            
        });

    };

});

