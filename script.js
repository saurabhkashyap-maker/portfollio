// script.js

/* Cursor */
const cursor=document.querySelector('.cursor');
window.addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';});

/* Typing Animation */
const textEN="AI • Web Developer • Tech Enthusiast";
const textHI="AI • वेब डेवलपर • टेक उत्साही";
let currentText=textEN;
const typing=document.getElementById('typing');
function type(){typing.textContent="";let i=0;const interval=setInterval(()=>{typing.textContent+=currentText.charAt(i);i++;if(i>=currentText.length)clearInterval(interval)},80)}
type();

const langBtn=document.getElementById('langBtn');
langBtn.addEventListener('click',()=>{if(currentText===textEN){currentText=textHI;langBtn.textContent='HI'}else{currentText=textEN;langBtn.textContent='EN'};type();});

/* Scroll Animations */
const sections=document.querySelectorAll('section');
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.2});
sections.forEach(s=>obs.observe(s));

/* Sounds */
let soundOn=false;
const startSound=new Audio('sounds/start.mp3');
const hoverSound=new Audio('sounds/hover.mp3');
const clickSound=new Audio('sounds/click.mp3');
const toggle=document.getElementById('soundToggle');
toggle.addEventListener('click',()=>{soundOn=!soundOn;toggle.textContent=soundOn?'🔊 Sound ON':'🔇 Sound OFF';if(soundOn)startSound.play();});

document.querySelectorAll('.btn,.project-card').forEach(btn=>{btn.addEventListener('mouseenter',()=>{if(soundOn){hoverSound.currentTime=0;hoverSound.play();}});btn.addEventListener('click',()=>{if(soundOn){clickSound.currentTime=0;clickSound.play();}});});

/* Contact Form */
document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();document.getElementById('formStatus').textContent='Message sent successfully!';});

/* Chatbot */
const chatbot=document.getElementById('chatbot');
document.querySelector('.whatsapp').addEventListener('dblclick',()=>{chatbot.style.display=chatbot.style.display==='flex'?'none':'flex';});
const botMessages=document.getElementById('botMessages');
const botInput=document.getElementById('botInput');
document.getElementById('botSend').addEventListener('click',()=>{const msg=botInput.value.trim();if(!msg)return;botMessages.innerHTML+=`<div><b>You:</b> ${msg}</div>`;setTimeout(()=>{botMessages.innerHTML+=`<div><b>Bot:</b> Thanks for contacting Saurabh Kumar Jha. I will reply soon.</div>`;botMessages.scrollTop=botMessages.scrollHeight;},600);botInput.value='';});
