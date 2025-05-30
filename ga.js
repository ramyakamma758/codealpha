// script.js
function openModal(imgElement) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImage');
  const captionText = document.getElementById('caption');

  modal.style.display = 'block';
  modalImg.src = imgElement.src;
  captionText.innerText = imgElement.alt;
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
