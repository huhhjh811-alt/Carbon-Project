(function() {
  const newyearToggle = document.getElementById('newyearToggle');
  const newyearModal = document.getElementById('newyearModal');
  const newyearClose = document.getElementById('newyearClose');
  const newyearAudio = document.getElementById('newyearAudio');
  const confettiCanvas = document.getElementById('confettiCanvas');
  const ctx = confettiCanvas.getContext('2d');

  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  });

  const targetDate = new Date('2026-01-01T00:00:00').getTime();
  let confettiParticles = [];
  let animationId = null;

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      document.getElementById('days').textContent = '00';
      document.getElementById('hours').textContent = '00';
      document.getElementById('minutes').textContent = '00';
      document.getElementById('seconds').textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }

  function createConfetti() {
    const colors = ['#10b981', '#fbbf24', '#ef4444', '#8b5cf6', '#0ea5e9', '#f87171', '#34d399'];
    for (let i = 0; i < 100; i++) {
      confettiParticles.push({
        x: Math.random() * confettiCanvas.width,
        y: Math.random() * confettiCanvas.height - confettiCanvas.height,
        r: Math.random() * 6 + 2,
        d: Math.random() * confettiParticles.length,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.floor(Math.random() * 10) - 10,
        tiltAngleIncrement: Math.random() * 0.07 + 0.05,
        tiltAngle: 0
      });
    }
  }

  function drawConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    
    confettiParticles.forEach((p, index) => {
      ctx.beginPath();
      ctx.lineWidth = p.r / 2;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r);
      ctx.stroke();

      p.tiltAngle += p.tiltAngleIncrement;
      p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
      p.tilt = Math.sin(p.tiltAngle - index / 3) * 15;

      if (p.y > confettiCanvas.height) {
        p.x = Math.random() * confettiCanvas.width;
        p.y = -20;
        p.tilt = Math.floor(Math.random() * 10) - 10;
      }
    });

    animationId = requestAnimationFrame(drawConfetti);
  }

  function openModal() {
    newyearModal.classList.add('active');
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    try {
      newyearAudio.play().catch(e => {
        console.log('Audio play failed:', e);
      });
    } catch (e) {
      console.log('Audio error:', e);
    }

    createConfetti();
    drawConfetti();
  }

  function closeModal() {
    newyearModal.classList.remove('active');
    newyearAudio.pause();
    newyearAudio.currentTime = 0;
    
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
    confettiParticles = [];
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  }

  if (newyearToggle) {
    newyearToggle.addEventListener('click', openModal);
  }

  if (newyearClose) {
    newyearClose.addEventListener('click', closeModal);
  }

  if (newyearModal) {
    newyearModal.addEventListener('click', (e) => {
      if (e.target === newyearModal) {
        closeModal();
      }
    });
  }
})();

