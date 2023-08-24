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

document.addEventListener("DOMContentLoaded", function() {
  const modalButtons = document.querySelectorAll("[data-modal-toggle]");
  const closeModalButtons = document.querySelectorAll("[data-modal-hide]");

  modalButtons.forEach(button => {
      button.addEventListener("click", () => {
          const modalTargetId = button.getAttribute("data-modal-toggle");
          const modalTarget = document.getElementById(modalTargetId);

          modalTarget.classList.remove("hidden");
          modalTarget.classList.add("flex");
          modalTarget.setAttribute("aria-hidden", "false");
      });
  });

  closeModalButtons.forEach(button => {
      button.addEventListener("click", () => {
          const modalTargetId = button.getAttribute("data-modal-hide");
          const modalTarget = document.getElementById(modalTargetId);

          modalTarget.classList.add("hidden");
          modalTarget.classList.remove("flex");
          modalTarget.setAttribute("aria-hidden", "true");
      });
  });
});
