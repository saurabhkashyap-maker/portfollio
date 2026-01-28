const hoverSound = new Audio("hover.mp3");
const clickSound = new Audio("click.mp3");

document.querySelectorAll("button, .card").forEach(el => {
  el.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });

  el.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});
