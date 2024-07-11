const projectImages = document.querySelectorAll(".project-image")
const modalOverlay = document.querySelector(".modal-overlay")

projectImages.forEach(imgEl => {
  imgEl.addEventListener('click', () => {
    const description = imgEl.nextElementSibling.cloneNode(true);
    const modalBody = modalOverlay.querySelector('.modal-body');
    modalBody.innerHTML = '';
    modalBody.appendChild(description);
    modalOverlay.style.display = 'flex';
    document.documentElement.style.overflowY = 'hidden'
  })
})

const closeModal = () => {
  modalOverlay.style.display = 'none';
  document.documentElement.style.overflowY = 'auto'

};

document.querySelector('.close-modal').addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});
