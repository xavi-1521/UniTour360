import 'flowbite'

const $ = (element) => {
    return document.querySelector(element)
}

const title = $('#title-banner')
const menuOpen = $('#menu-open')
const menuClose = $('#menu-close')
const menuOptions = $('#menu-options')

menuOpen.addEventListener('click', () => {
    menuOptions.style.display = "block";
    menuClose.style.display = "block";
    menuOpen.style.display = "none";
    if (title) title.style.display = "none";
})

menuClose.addEventListener('click', () => {
    menuOptions.style.display = "none";
    menuClose.style.display = "none";
    menuOpen.style.display = "block";
    if (title) title.style.display = "block";
})
