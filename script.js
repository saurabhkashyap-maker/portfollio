// script.js - Full Upgraded Portfolio with Animated Background + AI Chatbot

/* Cursor */
const cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

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
langBtn.addEventListener('click', () => {
  currentText = (currentText === textEN) ? textHI : textEN;
  langBtn.textContent = (currentText === textEN) ? 'EN' : 'HI';
  type();
});

/* Scroll Animations */
const sections = document.querySelectorAll('section');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.2 });
sections.forEach(s => obs.observe(s));

/* Sounds */
let soundOn = false;
const startSound = new Audio('sounds/start.mp3');
const hoverSound = new Audio('sounds/hover.mp3');
const clickSound = new Audio('sounds/click.mp3');
const toggle = document.getElementById('soundToggle');
toggle.addEventListener('click', () => {
  soundOn = !soundOn;
  toggle.textContent = soundOn ? '🔊 Sound ON' : '🔇 Sound OFF';
  if (soundOn) startSound.play();
});

document.querySelectorAll('.btn,.project-card').forEach(btn => {
  btn.addEventListener('mouseenter', () => { if (soundOn) { hoverSound.currentTime = 0; hoverSound.play(); } });
  btn.addEventListener('click', () => { if (soundOn) { clickSound.currentTime = 0; clickSound.play(); } });
});

/* Contact Form */
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formStatus').textContent = 'Message sent successfully!';
});

/* AI Chatbot */
const chatbot = document.getElementById('chatbot');
document.querySelector('.whatsapp').addEventListener('dblclick', () => {
  chatbot.style.display = chatbot.style.display === 'flex' ? 'none' : 'flex';
});
const botMessages = document.getElementById('botMessages');
const botInput = document.getElementById('botInput');
const aiResponses = {
  "hello": "Hello! How can I help you today?",
  "ngo": "You can visit our NGO site at https://vfgfoundation.com",
  "default": "Thanks for contacting Saurabh Kumar Jha. I will reply soon."
};
document.getElementById('botSend').addEventListener('click', () => {
  const msg = botInput.value.trim().toLowerCase();
  if (!msg) return;
  botMessages.innerHTML += `<div><b>You:</b> ${msg}</div>`;
  setTimeout(() => {
    const reply = aiResponses[msg] || aiResponses["default"];
    botMessages.innerHTML += `<div><b>Bot:</b> ${reply}</div>`;
    botMessages.scrollTop = botMessages.scrollHeight;
  }, 600);
  botInput.value = '';
});

/* Particle Background Animation */
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 120; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 1.2,
    dy: (Math.random() - 0.5) * 1.2
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(56,189,248,0.6)';
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
