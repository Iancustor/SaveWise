// Nav toggle
const menu = document.querySelector(".navList");
const humbergBtn = document.querySelector(".humberg-menu-btn");

humbergBtn.addEventListener("click", function toggling() {
  menu.classList.toggle("showMenu");
  console.log("clicked");
});
