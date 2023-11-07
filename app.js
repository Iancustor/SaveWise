// Nav toggle
const menu = document.querySelector(".navList");
const humbergBtn = document.querySelector(".humberg-menu-btn");

humbergBtn.addEventListener("click", function toggling() {
  menu.classList.toggle("showMenu");
  console.log("clicked");
});

// time out
const launchMes = document.querySelector(".launchMessage");
const message = document.querySelector(".newMessage");
setInterval(() => {
  message.style.backgroundColor = `#${Math.floor(
    Math.random() * 0xffffff
  ).toString(16)}`;
}, 2000);
setInterval(() => {
  // Rendering launch message
  const today = new Date();
  const hours = today.getHours().toString().padStart(2, "0");
  const mins = today.getMinutes().toString().padStart(2, "0");
  const secs = today.getSeconds().toString().padStart(2, "0");

  message.textContent = `Remaining Time  ${hours}:${mins}:${secs}`;
}, 1000);
// console.log(hours, mins, secs);

// const launchDate = new Date(`2023-12-31 T 12:00:00`).setTime;
// console.log(launchDate);
