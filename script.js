// script.js - Upgraded Portfolio with smooth scroll, responsive, AI Chatbot

/* Cursor */
const cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', e => { cursor.style.left = e.clientX + 'px'; cursor.style.top = e.clientY + 'px'; });

/* Typing Animation */
const textEN = "AI • Web Developer • Tech Enthusiast";
const textHI = "AI • वेब डेवलपर • टेक उत्साही";
let currentText = textEN;
const typing = document.getElementById('typing');
function type() {
  typing.textContent = '';
  let i = 0;
  const interval = setInterval(() => {
    typing.textContent += currentText.charAt(i);
    i++;
    if (i >= currentText.length) clearInterval(interval);
  }, 80);
}
type();
const langBtn = document.getElementById('langBtn');
langBtn.addEventListener('click', () => { currentText = (currentText===textEN)?textHI:textEN; langBtn.textContent=(currentText===textEN)?'EN':'HI'; type(); });

/* Scroll reveal */
const sections=document.querySelectorAll('section');
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});},{threshold:.2});
sections.forEach(s=>obs.observe(s));

/* Floating button smooth scroll */
document.querySelectorAll('.btn').forEach(btn=>{
btn.addEventListener('click',()=>{
const targetId=btn.getAttribute('data-target');
if(targetId){document.getElementById(targetId).scrollIntoView({behavior:'smooth'});}
});
});

/* Back to top */
const backTop=document.getElementById('backToTop');
window.addEventListener('scroll',()=>{if(window.scrollY>300){backTop.style.display='block';}else{backTop.style.display='none';}});
backTop.addEventListener('click',()=>{window.scrollTo({top:0,behavior:'smooth'});});

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

/* AI Chatbot using OpenAI API (type B) */
const chatbot=document.getElementById('chatbot');
document.querySelector('.whatsapp').addEventListener('dblclick',()=>{chatbot.style.display=chatbot.style.display==='flex'?'none':'flex';});
const botMessages=document.getElementById('botMessages');
const botInput=document.getElementById('botInput');
const botSend=document.getElementById('botSend');
botSend.addEventListener('click',async()=>{
const msg=botInput.value.trim();
if(!msg)return;
botMessages.innerHTML+=`<div><b>You:</b> ${msg}</div>`;
botInput.value='';
// OpenAI API request (example, requires your API key)
try{
const response=await fetch('https://api.openai.com/v1/chat/completions',{
method:'POST',
headers:{'Content-Type':'application/json','Authorization':'Bearer YOUR_OPENAI_API_KEY'},
body:JSON.stringify({model:"gpt-3.5-turbo",messages:[{role:"user",content:msg}],max_tokens:150})
});
const data=await response.json();
const reply=data.choices[0].message.content;
botMessages.innerHTML+=`<div><b>Bot:</b> ${reply}</div>`;
botMessages.scrollTop=botMessages.scrollHeight;
}catch(err){botMessages.innerHTML+=`<div><b>Bot:</b> Sorry, something went wrong.</div>`;}
});

/* Particle Background */
const canvas=document.getElementById('particle-canvas');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;canvas.height=window.innerHeight;
let particles=[];
for(let i=0;i<120;i++){particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*3+1,dx:(Math.random()-0.5)*1.2,dy:(Math.random()-0.5)*1.2});}
function animateParticles(){ctx.clearRect(0,0,canvas.width,canvas.height);particles.forEach(p=>{p.x+=p.dx;p.y+=p.dy;if(p.x<0||p.x>canvas.width)p.dx*=-1;if(p.y<0||p.y>canvas.height)p.dy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(56,189,248,0.6)';ctx.fill();});requestAnimationFrame(animateParticles);}
animateParticles();
window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});
