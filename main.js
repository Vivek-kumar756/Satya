const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = Array.from({ length: 100 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 6 + 2,
  dx: Math.random() - 0.5,
  dy: Math.random() * 2 + 1,
  color: `hsl(${Math.random() * 360}, 100%, 50%)`
}));

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;

    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(draw);
}
draw();

const letterbox = document.querySelector(".para");
const  btn = document.querySelector("#btn");

const openLetter = ()=>{
  letterbox.style.display = "block";
  
}

const cut = ()=>{
  letterbox.style.display = "none";
}