const uploadImgInput = document.querySelector('.input-wrap__attach-image');
const uploadImgBtn = document.querySelector('.input-wrap__attach');
const answerInput = document.querySelector('.input-wrap__answer');
const imagePreview = document.querySelector('.input-wrap__preview')
const sendButton = document.querySelector('.input-wrap__send');

uploadImgBtn.addEventListener('click', function () {
  uploadImgInput.click();
  uploadImgInput.addEventListener('change', function () {
    if (uploadImgInput.files.length > 0) {
      imagePreview.innerHTML = '';

      for (let i = 0; i < uploadImgInput.files.length; i++) {
        const file = uploadImgInput.files[i];
        if (file.type.startsWith('image/')) {
          const img = document.createElement('img');
          img.src = URL.createObjectURL(file);
          img.alt = 'Выбранное изображение';
          img.classList.add('preview-image');
          imagePreview.appendChild(img);
        }
      }
    }
  });
})

sendButton.addEventListener('click', function () {

  if (answerInput.value.trim() !== '' || uploadImgInput.files.length !== 0) {
    alert('Сообщение отправлено')
    return;
  }
  return alert('Введите текст ответа.');;

});