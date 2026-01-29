/* INIT */
const btn = document.getElementById("initBtn");
const init = document.getElementById("initScreen");
const main = document.getElementById("mainContent");
const sound = document.getElementById("bootSound");

btn.onclick = () => {
  sound.play();
  setTimeout(()=>{
    init.style.display="none";
    main.style.display="block";
    startTyping();
  },1200);
};

/* TYPING ANIMATION */
const texts = [
  "Elite Digital Solutions",
  "AI Powered Systems",
  "Modern Web Experiences",
  "Future Ready Technology"
];
let i=0,j=0,del=false;
const typingEl = document.getElementById("typing");

function startTyping(){
  setInterval(()=>{
    if(!del){
      typingEl.textContent = texts[i].substring(0,j++);
      if(j>texts[i].length+10) del=true;
    }else{
      typingEl.textContent = texts[i].substring(0,j--);
      if(j===0){
        del=false;
        i=(i+1)%texts.length;
      }
    }
  },90);
}
