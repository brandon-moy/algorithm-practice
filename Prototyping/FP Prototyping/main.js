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

// will probably want to hide buttons, display modal with new buttons
// modal will show image and then there should be two buttons
// Do you want to use this image?
// 1 - Yes
// 2 - Retake and it should allow the user to retake the picture or reupload by
// activating the input again

function loadImage(event) {
  $inputImage.setAttribute('src', URL.createObjectURL(event.target.files[0]));
}
