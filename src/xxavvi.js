import confetti from 'canvas-confetti'

setInterval(() => {
  confetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin: {
      x: Math.random(),
      y: Math.random() - 0.2
    }
  });
}, 3000)
