const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");

modalBtn.addEventListener("click", function () {
  modal.classList.add("show-modal");
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("show-modal");
});
