// INTRO
document.getElementById("startBtn").onclick=()=>{
  document.getElementById("intro").style.display="none";
  document.getElementById("clickSound").play();
};

// MENU
function toggleMenu(){
  const m=document.getElementById("mobileMenu");
  m.style.display=m.style.display==="flex"?"none":"flex";
}
function go(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
  document.getElementById("clickSound").play();
  document.getElementById("mobileMenu").style.display="none";
}

// SOUND
document.querySelectorAll("a,button,.card").forEach(el=>{
  el.onmouseenter=()=>document.getElementById("hoverSound").play();
  el.onclick=()=>document.getElementById("clickSound").play();
});

// AI CHAT
function chatEnter(e){
  if(e.key==="Enter"){
    const i=e.target,v=i.value.toLowerCase();
    const b=document.getElementById("chatBody");
    b.innerHTML+=`<p><b>You:</b> ${v}</p>`;
    let r="I am learning 🤖";
    if(v.includes("hello")||v.includes("hi")) r="Hello 👋 How can I help?";
    if(v.includes("project")) r="Check WORK section.";
    if(v.includes("contact")) r="Use Hire Me button.";
    b.innerHTML+=`<p><b>AI:</b> ${r}</p>`;
    i.value="";b.scrollTop=b.scrollHeight;
  }
}

// PARTICLES
const c=document.getElementById("particles"),ctx=c.getContext("2d");
let w=c.width=innerWidth,h=c.height=innerHeight;
let p=[...Array(60)].map(()=>({x:Math.random()*w,y:Math.random()*h,dx:Math.random()-.5,dy:Math.random()-.5}));
(function draw(){
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle="#7c3aed";
  p.forEach(o=>{
    o.x+=o.dx;o.y+=o.dy;
    if(o.x<0||o.x>w)o.dx*=-1;
    if(o.y<0||o.y>h)o.dy*=-1;
    ctx.fillRect(o.x,o.y,2,2);
  });
  requestAnimationFrame(draw);
})();
onresize=()=>{w=c.width=innerWidth;h=c.height=innerHeight;}
