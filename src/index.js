const $ = (element) => {
    return document.querySelector(element)
}


const menuOpen = $('#menu-open')
const menuClose = $('#menu-close')
const menuOptions = $('#menu-options')

menuOpen.addEventListener('click', () => {
    menuOptions.style.display = "block";
    menuClose.style.display = "block";
    menuOpen.style.display = "none";

    document.body.style.overflow = "hidden";
    document.documentElement.scrollTop = 0;
})

menuClose.addEventListener('click', () => {
    menuOptions.style.display = "none";
    menuClose.style.display = "none";
    menuOpen.style.display = "block";

    document.body.style.overflow = "auto";
})
