// Nav toggle
const menu = document.querySelector(".navList");
const humbergBtn = document.querySelector(".humberg-menu-btn");

humbergBtn.addEventListener("click", function toggling() {
  menu.classList.toggle("showMenu");
  console.log("clicked");
});

// launch message
{
  /* <h2 class="newyear">2023 <br> <span>Happy New Year</span></h2> */
}

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
  // const today = new Date();
  // const hours = today.getHours().toString().padStart(2, "0");
  // const mins = today.getMinutes().toString().padStart(2, "0");
  // const secs = today.getSeconds().toString().padStart(2, "0");

  // Launch
  let launchDate = new Date(`2024-01-01  00:00:00`);
  // console.log(launchDate);

  let now = new Date(launchDate).getTime();
  let countDown = new Date().getTime();
  let period = now - countDown;
  // console.log(period);

  let day = Math.floor(period / (1000 * 60 * 60 * 24));
  // console.log(day);
  let hours = Math.floor((period % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    .toString()
    .padStart(2, "0");
  let mins = Math.floor(period % ((1000 * 60 * 60) / (1000 * 60)))
    .toString()
    .padStart(2, "0");
  let secs = Math.floor((period % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, "0");

  message.textContent = `${day}Days ${hours}hrs : ${mins}mins : ${secs}secs Remaining `;
}, 1000);
// console.log(hours, mins, secs);
