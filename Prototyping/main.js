var $form = document.querySelector('.tester');
var $numbers = document.querySelectorAll('.number > h1');

function changeNumber() {
  var value = $form.value;
  for (var i = 0; i < $numbers.length; i++) {
    var data = $numbers[i].getAttribute('data-view');
    $numbers[i].classList.add('hidden');
    if (value === data) {
      $numbers[i].classList.remove('hidden');
    }
  }
}

$form.addEventListener('change', changeNumber);
