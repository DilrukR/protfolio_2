const hamburger = document.querySelector(".hamburger");
const hamclose = document.querySelector(".hamclose");
const nav = document.querySelector(".nav-container");

hamburger.addEventListener("click", open);
hamclose.addEventListener("click", close);

function open() {
  nav.style.transform = "translatex(0)";
  hamburger.style.display = "none";
  hamclose.style.display = "block";
}
function close() {
  nav.style.transform = "translatex(100%)";
  hamburger.style.display = "block";
  hamclose.style.display = "none";
}
