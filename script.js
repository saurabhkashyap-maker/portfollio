/* INIT SCREEN */
const btn=document.getElementById("initBtn");
const init=document.getElementById("initScreen");
const main=document.getElementById("mainContent");
const bootSound=document.getElementById("bootSound");
btn.onclick=()=>{
  bootSound.play();
  setTimeout(()=>{
    init.style.display="none";
    main.style.display="block";
    startTyping();
    animateHomeServices();
  },1200);
};

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

/* NAVIGATION BUTTONS */
const navLinks=document.querySelectorAll("nav a");
navLinks.forEach(link=>{
  link.addEventListener("click",e=>{
    e.preventDefault();
    const section=link.dataset.section;
    document.querySelectorAll(".section").forEach(sec=>sec.style.display="none");
    document.getElementById(section).style.display="block";
    document.getElementById("navHoverSound").play();
  });
});

/* CHATBOX OFFLINE AI */
const chatBtn=document.getElementById("chatBtn");
const chatBox=document.getElementById("chatBox");
const chatContent=document.getElementById("chatContent");
const chatInput=document.getElementById("chatInput");

chatBtn.addEventListener("click",()=>{
  chatBox.style.display=chatBox.style.display==="flex"?"none":"flex";
  document.getElementById("chatHoverSound").play();
});

chatInput.addEventListener("keypress",e=>{
  if(e.key==="Enter"){
    const userMsg=chatInput.value.trim();
    if(!userMsg) return;
    chatContent.innerHTML+=`<div>User: ${userMsg}</div>`;
    chatInput.value="";
    setTimeout(()=>{
      let reply="Sorry
