const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const nextBtn = document.querySelector("#next-btn");
const checkBtn = document.querySelector("#check-btn");
const cashSection = document.querySelector(".cash-section");
const errorBox = document.querySelector("#error-message");
const numOfNotes = document.querySelectorAll(".num-of-notes");
const tableSection = document.querySelector(".table-container");

const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

const hideCashSection = () => {
  cashSection.style.display = "none";
  cashGiven.value = "";
};

const hideErrorBox = () => {
  errorBox.style.display = "none";
  errorBox.innerText = "";
};

const hideTableSection = () => {
  tableSection.style.display = "none";
  for (let i = 0; i < notes.length; i++) {
    numOfNotes[i].innerText = "";
  }
};

const initialLoad = () => {
  hideCashSection();
  hideErrorBox();
  hideTableSection();
};

initialLoad();

const showErrorBox = (message) => {
  errorBox.style.display = "block";
  errorBox.innerText = message;
};

const logNumberOfNotes = (returnAmount) => {
  for (let i = 0; i < notes.length; i++) {
    numOfNotes[i].innerText = Math.trunc(returnAmount / notes[i]);
    returnAmount %= notes[i];
  }
  tableSection.style.display = "flex";
};

const validateBillAmount = (billAmount) => (billAmount <= 0 ? false : true);

const invalidBillAmount = () => {
  initialLoad();
  nextBtn.style.display = "block";
  showErrorBox("Bill Amount should be greater than 0");
};

nextBtn.addEventListener("click", () => {
  if (validateBillAmount(billAmount.value)) {
    nextBtn.style.display = "none";
    cashSection.style.display = "flex";
    hideErrorBox();
  } else {
    invalidBillAmount();
  }
});

checkBtn.addEventListener("click", () => {
  hideErrorBox();
  hideTableSection();
  if (validateBillAmount(billAmount.value)) {
    const returnAmount = cashGiven.value - billAmount.value;
    if (returnAmount < 0) {
      showErrorBox(
        "Do you wanna wash Plates? Cash Given should be greater than or equal to Bill Amount"
      );
    } else {
      logNumberOfNotes(returnAmount);
    }
  } else {
    invalidBillAmount();
  }
});
