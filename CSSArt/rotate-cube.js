const $cube = document.querySelector('.cube');
const $cube2 = document.querySelector('.cube2');
const $start = document.querySelector('.start');
const $stop = document.querySelector('.stop');
const $cubeFaceTop = document.querySelector('.cube-face-top');
let count = 1;
let intervalId = null;
let borderIntervalId = null;
let position = 0;
const borders = {
  top: ['10px, 10px, 1px, 1px', '1px, 10px, 10px, 1px',
    '1px, 1px, 10px, 10px', '10px, 1px, 1px, 10px']

};

// currently does nothing... need to understand how to update border-width with
// value?

function borderSet() {
  borderIntervalId = setInterval(() => {
    if (position === 3) {
      position = 0;
      $cubeFaceTop.style.borderWidth = borders.top[position];
    } else {
      position++;
      $cubeFaceTop.style.borderWidth = borders.top[position];
    }
  }, 3000);
}

function rotate() {
  intervalId = setInterval(() => {
    const amount = 45 + (count * 90);
    const cube2amount = (count * 180);
    $cube.style.transform = 'translateZ(-100px) rotateX(-45deg) rotateY(' + amount + 'deg)';
    $cube2.style.transform = 'rotateY(-' + cube2amount + 'deg)';
    count++;
  }, 3000);
}
$stop.addEventListener('click', () => {
  clearInterval(intervalId);
  clearInterval(borderIntervalId);
  intervalId = null;
  borderIntervalId = null;
});

$start.addEventListener('click', rotate);

rotate();
borderSet();
