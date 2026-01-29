/* TYPING EFFECT */
const texts=["Elite Digital Solutions","AI Powered Systems","Modern Web Experiences","Future Ready Technology"];
let i=0,j=0,del=false;
const typingEl=document.getElementById("typing");
function startTyping(){
  setInterval(()=>{
    if(!del){
      typingEl.textContent=texts[i].substring(0,j++);
      if(j>texts[i].length+10) del=true;
    }else{
      typingEl.textContent=texts[i].substring(0,j--);
      if(j===0){del=false;i=(i+1)%texts.length;}
    }
  },90);
}
startTyping();

/* HOME SERVICES SLIDE-IN */
function animateHomeServices(){
  const cards = document.querySelectorAll(".home-services .service-card");
  cards.forEach((card,index)=>{
    card.style.animation = `slideIn 0.8s forwards`;
    card.style.animationDelay = `${0.2*(index+1)}s`;
  });
}
animateHomeServices();

/* NAVIGATION BUTTONS */
const navLinks=document.querySelectorAll("nav a");
navLinks.forEach(link=>{
  link.addEventListener("click",e=>{
    e.preventDefault();
    const section=link.dataset.section;
    document.querySelectorAll(".section").forEach(sec=>sec.style.display="none");
    document.getElementById(section).style.display="block";
  });
});

/* CHATBOX OFFLINE AI */
const chatBtn=document.getElementById("chatBtn");
const chatBox=document.getElementById("chatBox");
const chatContent=document.getElementById("chatContent");
const chatInput=document.getElementById("chatInput");

chatBtn.addEventListener("click",()=>{
  chatBox.style.display=chatBox.style.display==="flex"?"none":"flex";
});

chatInput.addEventListener("keypress",e=>{
  if(e.key==="Enter"){
    const userMsg=chatInput.value.trim();
    if(!userMsg) return;
    chatContent.innerHTML+=`<div>User: ${userMsg}</div>`;
    chatInput.value="";
    setTimeout(()=>{
      let reply="Sorry, I can't answer that right now.";
      chatContent.innerHTML+=`<div>Assistant: ${reply}</div>`;
      chatContent.scrollTop=chatContent.scrollHeight;
    },500);
  }
});

/* PARTICLES BACKGROUND */
const canvas=document.getElementById("bgCanvas");
const ctx=canvas.getContext("2d");
let particles=[];
function initParticles(){
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  particles=[];
  for(let i=0;i<80;i++){
    particles.push({
      x:Math.random()*canvas.width,
      y:Math.random()*canvas.height,
      r:Math.random()*2+1,
      dx:(Math.random()-0.5)*1,
      dy:(Math.random()-0.5)*1
    });
  }
}
function drawParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="rgba(155,92,255,0.7)";
    ctx.fill();
    p.x+=p.dx;
    p.y+=p.dy;
    if(p.x>canvas.width||p.x<0) p.dx*=-1;
    if(p.y>canvas.height||p.y<0) p.dy*=-1;
  });
  requestAnimationFrame(drawParticles);
}
window.addEventListener("resize",initParticles);
initParticles();
drawParticles();
