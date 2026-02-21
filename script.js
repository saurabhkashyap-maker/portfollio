// Sound System
let soundEnabled = true;

// Create audio contexts
function playSound(type) {
    if (!soundEnabled) return;
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    if (type === 'click') {
        // Click sound
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.1);
    }
    
    if (type === 'hover') {
        // Hover sound (very subtle)
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
        
        gainNode.gain.setValueAtTime(0.03, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.05);
    }
    
    if (type === 'notification') {
        // Notification sound
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(1000, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(1200, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.2);
    }
    
    if (type === 'success') {
        // Success sound
        const oscillator1 = audioContext.createOscillator();
        const oscillator2 = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator1.type = 'sine';
        oscillator1.frequency.setValueAtTime(600, audioContext.currentTime);
        
        oscillator2.type = 'sine';
        oscillator2.frequency.setValueAtTime(800, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator1.connect(gainNode);
        oscillator2.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator1.start();
        oscillator2.start(audioContext.currentTime + 0.1);
        oscillator1.stop(audioContext.currentTime + 0.3);
        oscillator2.stop(audioContext.currentTime + 0.3);
    }
}

// Toggle sound
function toggleSound() {
    soundEnabled = !soundEnabled;
    const icon = document.getElementById('soundIcon');
    if (soundEnabled) {
        icon.className = 'fas fa-volume-up';
        playSound('notification');
    } else {
        icon.className = 'fas fa-volume-mute';
    }
}

// Typewriter effect
const words = ['Saurabh Kr Jha', 'BCA Student', 'AI Enthusiast', 'Future Developer'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    const typewriterElement = document.getElementById('typewriter');
    
    if (isDeleting) {
        typewriterElement.innerHTML = currentWord.substring(0, charIndex - 1) + '<span>Jha</span><span class="cursor"></span>';
        charIndex--;
    } else {
        typewriterElement.innerHTML = currentWord.substring(0, charIndex + 1) + '<span>Jha</span><span class="cursor"></span>';
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

// Skills data
const skills = [
    { name: 'Python', level: 85, icon: 'fa-python' },
    { name: 'Java', level: 75, icon: 'fa-java' },
    { name: 'JavaScript', level: 80, icon: 'fa-js' },
    { name: 'Machine Learning', level: 70, icon: 'fa-brain' },
    { name: 'SQL', level: 80, icon: 'fa-database' },
    { name: 'Web Development', level: 75, icon: 'fa-code' }
];

// Projects data
const projects = [
    {
        title: 'AI Portfolio',
        desc: 'A modern AI-themed portfolio with interactive 3D elements and smooth animations.',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        icon: 'fa-robot'
    },
    {
        title: 'ML Model Trainer',
        desc: 'Interactive machine learning model trainer with real-time visualization.',
        tech: ['Python', 'Scikit-learn', 'Flask'],
        icon: 'fa-brain'
    },
    {
        title: 'Data Analysis Tool',
        desc: 'Powerful data analysis and visualization tool for beginners.',
        tech: ['Python', 'Pandas', 'Plotly'],
        icon: 'fa-chart-line'
    }
];

// Populate skills
function populateSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;
    
    skills.forEach((skill, index) => {
        const card = document.createElement('div');
        card.className = 'skill-card hvr-float-shadow';
        card.setAttribute('onmouseenter', 'playSound("hover")');
        card.innerHTML = `
            <div class="skill-icon"><i class="fab ${skill.icon} hvr-spin"></i></div>
            <h3 class="skill-name">${skill.name}</h3>
            <div class="skill-bar-container">
                <div class="skill-bar" style="--level: ${skill.level}%; width: ${skill.level}%"></div>
            </div>
        `;
        skillsGrid.appendChild(card);
    });
}

// Populate projects
function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card hvr-float-shadow';
        card.setAttribute('onmouseenter', 'playSound("hover")');
        card.innerHTML = `
            <div class="project-image">
                <i class="fas ${project.icon} hvr-bob"></i>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.desc}</p>
                <div class="project-tech">
                    ${project.tech.map(t => `<span class="tech-tag hvr-pulse">${t}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="https://github.com/saurabhkashyap-maker" target="_blank" onclick="playSound('click')"><i class="fab fa-github"></i> Code</a>
                    <a href="#" onclick="playSound('click')"><i class="fas fa-external-link-alt"></i> Demo</a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(card);
    });
}

// Create particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = 10 + Math.random() * 10 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Mouse move parallax effect
document.addEventListener('mousemove', (e) => {
    const spheres = document.querySelectorAll('.gradient-sphere');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    spheres.forEach(sphere => {
        sphere.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    });
});

// Form submission
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    playSound('success');
    alert('✨ Thanks for reaching out! I\'ll get back to you soon.');
    this.reset();
});

// Initialize audio context on first interaction
document.body.addEventListener('click', function initAudio() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    document.body.removeEventListener('click', initAudio);
}, { once: true });

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffect, 1000);
    createParticles();
    populateSkills();
    populateProjects();
});
