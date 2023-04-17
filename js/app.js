// HAMBUGGER MENU
const main_menu = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".nav-mobile");

main_menu.addEventListener("click", function () {
  main_menu.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});


// TO TOP BUTTON
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active")
  }
})




