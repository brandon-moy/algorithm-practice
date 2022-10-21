const $uploadInput = document.querySelector('.upload');
const $captureInput = document.querySelector('.capture');
const $uploadButton = document.querySelector('.upload-button');
const $captureButton = document.querySelector('.capture-button');
const $inputImage = document.querySelector('.input-image');

$uploadButton.addEventListener('click', clickInput);

function clickInput() {
  $uploadInput.click();
}

$captureButton.addEventListener('click', clickCapture);

function clickCapture() {
  $captureInput.click();
}

$captureInput.addEventListener('change', loadImage);
$uploadInput.addEventListener('change', loadImage);

function loadImage(event) {
  $inputImage.setAttribute('src', URL.createObjectURL(event.target.files[0]));
}
