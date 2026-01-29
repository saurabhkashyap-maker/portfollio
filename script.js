/* ========================
   INIT SCREEN & BOOT SOUND
======================== */
const btn = document.getElementById("initBtn");
const init = document.getElementById("initScreen");
const main = document.getElementById("mainContent");
const bootSound = document.getElementById("bootSound");

btn.onclick = () => {
  bootSound.play();
  setTimeout(()=>{
    init.style.display="none";
    main.style.display="block";
    startTyping();
  },1200);
};

/* ========================
   TYPING ANIMATION
======================== */
const texts = [
  "Elite Digital Solutions",
  "AI Powered Systems",
  "Modern Web Experiences",
  "Future Ready Technology"
];
let i=0, j=0, del=false;
const typingEl = document.getElementById("typing");
function startTyping(){
  setInterval(()=>{
    if(!del){
      typingEl.textContent = texts[i].substring(0,j++);
      if(j>texts[i].length+10) del=true;
    }else{
      typingEl.textContent = texts[i].substring(0,j--);
      if(j===0){del=false;i=(i+1)%texts.length;}
    }
  },90);
}

/* ========================
   NAVIGATION BUTTONS
======================== */
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link=>{
  link.addEventListener("click", e=>{
    e.preventDefault();
    const section = link.dataset.section;
    document.querySelectorAll(".section").forEach(sec=>sec.style.display="none");
    document.getElementById(section).style.display="block";
    document.getElementById("navHoverSound").play();
  });
});

/* ========================
   CHATBOX OFFLINE AI
======================== */
const chatBtn = document.getElementById("chatBtn");
const chatBox = document.getElementById("chatBox");
const chatContent = document.getElementById("chatContent");
const chatInput = document.getElementById("chatInput");

chatBtn.addEventListener("click", ()=>{
  chatBox.style.display = chatBox.style.display==="flex"?"none":"flex";
  document.getElementById("chatHoverSound").play();
});

chatInput.addEventListener("keypress", e=>{
  if(e.key==="Enter"){
    const userMsg = chatInput.value.trim();
    if(!userMsg) return;
    chatContent.innerHTML += `<div>User: ${userMsg}</div>`;
    chatInput.value="";
    setTimeout(()=>{
      let reply = "Sorry, I cannot answer that now.";
      const msg = userMsg.toLowerCase();
      if(msg.includes("hello")||msg.includes("hi")) reply="Hello! I am Saurabh's assistant.";
      else if(msg.includes("service")) reply="I offer Web, AI, Game & App development services.";
      else if(msg.includes("about")) reply="I am a BCA student specializing in Data Science & AI.";
      else if(msg.includes("skills")) reply="I am skilled in Python, JS, React, Node, Laravel & AI.";
      else if(msg.includes("work")) reply="You can check my latest projects under Work section.";
      chatContent.innerHTML += `<div>Assistant: ${reply}</div>`;
      chatContent.scrollTop = chatContent.scrollHeight;
    },500);
  }
});

/* ========================
   SERVICE CARD HOVER SOUND
======================== */
const cardSound = document.getElementById("cardHoverSound");
document.querySelectorAll(".service-card").forEach(card=>{
  card.addEventListener("mouseenter", ()=>{ cardSound.play(); });
});

/* ========================
   PARTICLE BACKGROUND
======================== */
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for(let i=0;i<150;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*2+1,
    dx:(Math.random()-0.5)/1.5,
    dy:(Math.random()-0.5)/1.5
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = "rgba(155,92,255,0.6)";
    ctx.fill();
    p.x += p.dx; p.y += p.dy;
    if(p.x<0 || p.x>canvas.width) p.dx*=-1;
    if(p.y<0 || p.y>canvas.height) p.dy*=-1;
  });
  requestAnimationFrame(animate);
}
animate();

/* ========================
   RESIZE CANVAS
======================== */
window.addEventListener("resize", ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
