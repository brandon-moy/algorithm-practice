const $cube = document.querySelector('.cube');
const $cube2 = document.querySelector('.cube2');
const $start = document.querySelector('.start');
const $stop = document.querySelector('.stop');
let count = 1;
let intervalId = null;

function rotate() {
  intervalId = setInterval(() => {
    const amount = 45 + (count * 90);
    const cube2amount = (count * 180);
    $cube.style.transform = 'translateZ(-100px) rotateX(-45deg) rotateY(' + amount + 'deg)';
    $cube2.style.transform = 'rotateY(-' + cube2amount + 'deg)';
    count++;
  }, 2000);
}
$stop.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
});

$start.addEventListener('click', rotate);

rotate();
