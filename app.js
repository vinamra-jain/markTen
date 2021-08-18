const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const errorBox = document.querySelector("#error-message");
const numOfNotes = document.querySelectorAll(".num-of-notes");

const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

const hideErrorBox = () => {
  errorBox.style.display = "none";
};

const showErrorBox = (message) => {
  errorBox.style.display = "block";
  errorBox.innerText = message;
};

const logNumberOfNotes = (returnAmount) => {
  for (let i = 0; i < notes.length; i++) {
    numOfNotes[i].innerText = Math.trunc(returnAmount / notes[i]);
    returnAmount %= notes[i];
  }
};

checkBtn.addEventListener("click", () => {
  hideErrorBox();
  if (billAmount.value >= 0) {
    if (cashGiven.value >= billAmount.value) {
      const returnAmount = cashGiven.value - billAmount.value;
      logNumberOfNotes(returnAmount);
    } else {
      showErrorBox(
        "Do you wanna wash Plates? Cash Given is less than Bill Amount"
      );
    }
  } else {
    showErrorBox("Bill Amount should be greater than 0");
  }
});
