const openButton = document.getElementById('openEnvelope');
const intro = document.getElementById('intro');
const letterSection = document.getElementById('letterSection');
const skipIntro = document.getElementById('skipIntro');
const music = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const replay = document.getElementById('replay');
const canvas = document.getElementById('effects');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let particles = [];
let animationStarted = false;

function addBurst(x, y, amount = 28) {
  for (let i = 0; i < amount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 1 + Math.random() * 3.5;
    particles.push({
      x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
      life: 1, decay: 0.008 + Math.random() * 0.014,
      size: 3 + Math.random() * 5,
      symbol: Math.random() > 0.45 ? '♥' : '✦',
      color: ['#f08eaa', '#f7bfd0', '#e9a0bd', '#ffd38d'][Math.floor(Math.random() * 4)]
    });
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  particles = particles.filter(p => p.life > 0);
  for (const p of particles) {
    p.x += p.vx; p.y += p.vy; p.vy += 0.018; p.life -= p.decay;
    ctx.globalAlpha = Math.max(0, p.life);
    ctx.fillStyle = p.color;
    ctx.font = `${p.size * 3}px serif`;
    ctx.fillText(p.symbol, p.x, p.y);
  }
  ctx.globalAlpha = 1;
  requestAnimationFrame(animateParticles);
}
animateParticles();

function showLetter() {
  if (animationStarted) return;
  animationStarted = true;
  openButton.classList.add('open');
  setTimeout(() => {
    intro.classList.add('hidden');
    letterSection.classList.remove('hidden');
    document.querySelectorAll('#message p').forEach((paragraph, index) => {
      setTimeout(() => paragraph.classList.add('show'), 500 + index * 1100);
    });
    for (let i = 0; i < 5; i++) {
      setTimeout(() => addBurst(window.innerWidth * (0.2 + Math.random() * 0.6), window.innerHeight * (0.2 + Math.random() * 0.4), 22), i * 350);
    }
    startFloatingHearts();
    letterSection.scrollIntoView({ behavior: 'smooth' });
  }, 850);
}
openButton.addEventListener('click', showLetter);
skipIntro.addEventListener('click', showLetter);

function startFloatingHearts() {
  const symbols = ['♥', '♡', '✿', '✦'];
  setInterval(() => {
    const heart = document.createElement('span');
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.cssText = `
      position:fixed; z-index:4; left:${Math.random() * 100}vw; bottom:-30px;
      color:${['#e987a5','#f2b4c6','#d99ab5'][Math.floor(Math.random()*3)]};
      font-size:${14 + Math.random()*20}px; pointer-events:none;
      animation: floatUp ${5 + Math.random()*4}s linear forwards; opacity:.8;`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 9500);
  }, 650);
}

const style = document.createElement('style');
style.textContent = '@keyframes floatUp { to { transform: translateY(-110vh) rotate(360deg); opacity: 0; } }';
document.head.appendChild(style);

musicToggle.addEventListener('click', async () => {
  if (music.paused) {
    try {
      await music.play();
      musicToggle.textContent = '♫ Tạm dừng nhạc';
    } catch (error) {
      alert('Chưa phát được nhạc. Hãy kiểm tra file assets/music.mp3 nhé.');
    }
  } else {
    music.pause();
    musicToggle.textContent = '♫ Bật nhạc nền';
  }
});

replay.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  letterSection.classList.add('hidden');
  intro.classList.remove('hidden');
  openButton.classList.remove('open');
  animationStarted = false;
  document.querySelectorAll('#message p').forEach(p => p.classList.remove('show'));
});

// Chỉnh tên người nhận tại đây:
const recipientName = 'em';
document.getElementById('introName').textContent = recipientName;
document.getElementById('letterName').textContent = recipientName;
