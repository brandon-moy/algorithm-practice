var card = document.querySelector('.flashcard');
card.addEventListener('click', function () {
  card.classList.toggle('is-flipped');
});

// toggle is like if (true) classList.remove() else if (!true) classList.add()
