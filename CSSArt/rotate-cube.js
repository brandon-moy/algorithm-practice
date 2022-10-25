const $cube = document.querySelector('.cube');
const $cube2 = document.querySelector('.cube2');
const $stop = document.querySelector('.stop');
let count = 1;

const rotate = setInterval(() => {
  const amount = 45 + (count * 90);
  $cube.style.transform = 'translateZ(-100px) rotateX(-45deg) rotateY(' + amount + 'deg)';
  $cube2.style.transform = 'translateZ(-100px) rotateX(-45deg) rotateY(-' + amount + 'deg)';
  count++;
}, 2000);

$stop.addEventListener('click', () => {
  clearInterval(rotate);
});
