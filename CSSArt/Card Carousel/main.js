const $left = document.querySelector('.left');
const $right = document.querySelector('.right');
const $carousel = document.querySelector('.carousel');
let spins = 0;

function spinRight(event) {
  const amount = (spins * 30) + 30;
  $carousel.style.transform = 'rotateY(' + amount + 'deg)';
  spins++;
}

function spinLeft(event) {
  const amount = (spins * 30) - 30;
  $carousel.style.transform = 'rotateY(' + amount + 'deg)';
  spins--;
}

$right.addEventListener('click', spinRight);
$left.addEventListener('click', spinLeft);
