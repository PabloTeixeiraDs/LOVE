const heartRain = document.getElementById('heartRain');
const btn = document.getElementById('surpriseBtn');

btn.addEventListener('click', () => {
  for (let i = 0; i < 40; i++) {
    createHeart();
  }
  alert("Você é o meu maior presente 💜");
});

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '💜';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (2 + Math.random() * 3) + 's';
  heartRain.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
