//DEĞERLER
const modal = document.querySelector(".modal");
btn = document.querySelector(".btn");
modalContent = document.querySelector(".modal-content");
close = document.querySelector(".close");

modal.addEventListener("click", openModal);
btn.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

// Open Model
function openModal(e) {
  e.preventDefault();
  modal.style.display = "block";
}
//Close Model
function closeModal() {
  modalContent.classList.add("slide-up");

  setTimeout(() => {
    modal.style.display = "none";
    modalContent.classList.remove("slide-up");
  }, 500);
}
