const btnsContainer = document.querySelector(".rating-btns-container");
const ratingBtns = document.querySelectorAll(".rating__btn");
const submitBtn = document.querySelector(".btn-submit");
const card = document.querySelector(".card");
const overlay = document.querySelector(".overlay");
const checkedRating = [];
const overlayMsg = document.querySelector(".overlay__feedback-msg");
btnsContainer.addEventListener("click", function (e) {
  const clickTarget = e.target;

  ratingBtns.forEach((btn) => {
    btn.classList.remove("checked");
  });

  if (clickTarget.classList.contains("circle")) {
    clickTarget.classList.add("checked");
    checkedRating.push(clickTarget.innerText);
    submitBtn.disabled = false;
  }
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (checkedRating > 0) {
    card.classList.add("hidden");
    overlay.classList.remove("hidden");
    overlayMsg.textContent = `You selected ${checkedRating[0]} out of 5`;
  }
});
