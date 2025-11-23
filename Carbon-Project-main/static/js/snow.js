(function() {
  const snowContainer = document.createElement('div');
  snowContainer.className = 'snow-container';
  document.body.appendChild(snowContainer);

  const snowflakes = ['❄', '❅', '❆', '✻', '✼', '✾', '✽'];
  const maxSnowflakes = 50;
  let activeSnowflakes = 0;

  function createSnowflake() {
    if (activeSnowflakes >= maxSnowflakes) return;

    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    
    const size = Math.random() * 0.8 + 0.4;
    const left = Math.random() * 100;
    const duration = Math.random() * 3 + 2;
    const drift = (Math.random() - 0.5) * 100;
    const delay = Math.random() * 2;
    const symbol = snowflakes[Math.floor(Math.random() * snowflakes.length)];

    snowflake.textContent = symbol;
    snowflake.style.left = left + '%';
    snowflake.style.fontSize = size + 'em';
    snowflake.style.animationDuration = duration + 's';
    snowflake.style.animationDelay = delay + 's';
    snowflake.style.setProperty('--drift', drift + 'px');
    snowflake.style.opacity = Math.random() * 0.5 + 0.5;

    snowContainer.appendChild(snowflake);
    activeSnowflakes++;

    snowflake.addEventListener('animationend', function() {
      snowflake.remove();
      activeSnowflakes--;
    });

    setTimeout(createSnowflake, Math.random() * 500 + 200);
  }

  for (let i = 0; i < 10; i++) {
    setTimeout(() => createSnowflake(), i * 300);
  }

  setInterval(() => {
    if (activeSnowflakes < maxSnowflakes) {
      createSnowflake();
    }
  }, 1000);
})();

