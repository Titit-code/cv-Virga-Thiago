function goTo(seccion) {
    document.getElementById(seccion).scrollIntoView({
        behavior: "smooth"
    });
}

function goUp() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* ANIMACION SCROLL */
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 50) {
            card.classList.add("visible");
        }
    });
});
