const uploadBtn = document.getElementById('uploadBtn');
const fileInput = document.getElementById('fileInput');
const previewContainer = document.getElementById('previewContainer');

// Open file picker on button click
uploadBtn.addEventListener('click', () => {
  fileInput.click();
});

// Handle file upload
fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function (event) {
      previewContainer.innerHTML = `<img src="${event.target.result}" alt="Scanned Image" />`;
      previewContainer.classList.add('show');
      previewContainer.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
  } else {
    previewContainer.innerHTML = '';
    previewContainer.classList.remove('show');
    previewContainer.classList.add('hidden');
  }
});
