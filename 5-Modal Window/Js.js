"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".Boxes");

// Openning And Closing
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function () {
    console.log("you just clicked");
    modal.classList.remove("hidden");
  });

  btnCloseModal.addEventListener("click", function () {
    modal.classList.add("hidden");
  });
}

//keyboard
document.addEventListener("keydown", function (r) {
  console.log(r.key);
  if (r.key === "Escape" && !modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
  }
});
