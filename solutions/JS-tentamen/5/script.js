const inner = document.querySelector(".inner");
const ball = document.querySelector(".ball");

inner.style.position = "relative";
ball.style.position = "absolute";

function onMouseMove(e) {
  const x = e.clientX;
  const y = e.clientY;
  ball.style.top = Math.max(0, Math.min(170, y - 15 - 8)) + "px";
  ball.style.left = Math.max(0, Math.min(170, x - 15 - 8)) + "px";
}

inner.addEventListener("mousemove", onMouseMove);
