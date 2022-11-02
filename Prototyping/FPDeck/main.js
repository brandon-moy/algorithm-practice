const $paper = document.querySelector('.option-paper');
const $folderFront = document.querySelector('.folder-front');

$folderFront.addEventListener('click', () => {
  $paper.classList.remove('hiding');
  $paper.classList.add('is-showing');
  setTimeout(() => {
    $paper.classList.add('in-front');
  }, 900);
});

$paper.addEventListener('click', () => {
  $paper.classList.remove('is-showing');
  $paper.classList.add('hiding');
  setTimeout(() => {
    $paper.classList.remove('in-front');
  }, 500);
});
