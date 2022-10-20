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

$captureInput.addEventListener('onsubmit', updateImage);

function updateImage() {
  $inputImage.setAttribute('src', $captureInput.value);
}
