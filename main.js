// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

const mainHeader = document.getElementById("main-header");

function updateNavbarColor() {
  if (window.scrollY > 0) {
    header.classList.add("scroll-black");
  } else {
    header.classList.remove("scroll-black");
  }
}

window.addEventListener("scroll", updateNavbarColor);

updateNavbarColor();
