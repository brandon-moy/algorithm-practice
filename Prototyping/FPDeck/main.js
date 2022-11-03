const $form = document.querySelector('.new-deck-form');
const $input = document.querySelector('.modal-input');
const $modalBackground = document.querySelector('.modal-background');
const $newDeck = document.querySelector('.new-deck');
const $deckContainer = document.querySelector('.deck-container');

$newDeck.addEventListener('click', () => {
  $modalBackground.classList.remove('hidden');
});

// function showPaper() {
//   $paper.classList.remove('hiding');
//   $paper.classList.add('is-showing');
//   setTimeout(() => {
//     $paper.classList.add('in-front');
//   }, 900);
// }

// function hidePaper() {
//   $paper.classList.remove('is-showing');
//   $paper.classList.add('hiding');
//   setTimeout(() => {
//     $paper.classList.remove('in-front');
//   }, 500);
// }

$form.addEventListener('submit', event => {
  event.preventDefault();
  const deckName = $input.value;
  createDeck(deckName);
  $modalBackground.classList.add('hidden');
});

function createDeck(deckName) {
  const $deck = document.createElement('div');
  const $scene = document.createElement('div');
  const $folder = document.createElement('div');
  const $folderFront = document.createElement('div');
  const $deckText = document.createElement('h1');
  const $optionPaper = document.createElement('div');
  const $peepers = document.createElement('p');
  const $extraText = document.createElement('h1');
  const $optionImage = document.createElement('img');
  const $folderBack = document.createElement('div');
  const $folderTab = document.createElement('div');

  $deck.className = 'deck';
  $scene.className = 'scene';
  $folder.className = 'folder';
  $folderFront.className = 'folder-front';
  $deckText.className = 'deck-text';
  $optionPaper.className = 'option-paper';
  $peepers.className = 'peepers';
  $optionImage.className = 'option-image';
  $folderBack.className = 'folder-back';
  $folderTab.className = 'folder-tab';
  $optionImage.setAttribute('src', '200.gif');
  $deckText.textContent = deckName;
  $peepers.textContent = 'oh hey im peeping(O - O) /';
  $extraText.textContent = 'Sorry, I lied about not animating anything else';

  $folderFront.setAttribute('onClick', () => {
    $optionPaper.classList.remove('hiding');
    $optionPaper.classList.add('is-showing');
    setTimeout(() => {
      $optionPaper.classList.add('in-front');
    }, 900);
  });
  $optionPaper.onClick = () => {
    $optionPaper.classList.remove('is-showing');
    $optionPaper.classList.add('hiding');
    setTimeout(() => {
      $optionPaper.classList.remove('in-front');
    }, 500);
  };

  $deck.appendChild($scene);
  $scene.appendChild($folder);
  $folder.appendChild($folderFront);
  $folderFront.appendChild($deckText);
  $folder.appendChild($optionPaper);
  $optionPaper.appendChild($peepers);
  $optionPaper.appendChild($extraText);
  $optionPaper.appendChild($optionImage);
  $folder.appendChild($folderBack);
  $folder.appendChild($folderTab);

  $deckContainer.appendChild($deck);
}
