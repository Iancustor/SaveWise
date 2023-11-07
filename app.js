// Nav toggle
const menu = document.querySelector(".navList");
const humbergBtn = document.querySelector(".humberg-menu-btn");

humbergBtn.addEventListener("click", function toggling() {
  menu.classList.toggle("showMenu");
  console.log("clicked");
});

// time out
const launchMessage = document.querySelector(".message");

const today = new Date();
console.log(launchMessage);
