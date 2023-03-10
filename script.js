const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length -1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
    })
})

const navEl = document.querySelector("nav");

window.addEventListener("scroll", () =>{
    if (window.scrollY > 50) {
        navEl.classList.add("nav-scrolled");
    } else if (window.scrollY <= 50){
        navEl.classList.remove("nav-scrolled");
    }
} );