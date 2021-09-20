const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given")
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

//converting to numbers
const BillAmount = Number(billAmount.value);
const CashGiven = Number(cashGiven.value);

const avaliableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAmount() {
    hideMessage();
    if (BillAmount > 0) {
        if (CashGiven >= BillAmount) {
            const amountToBeReturned = CashGiven - BillAmount;
            calculateChange(amountToBeReturned); //passing vakue to calculate change
        } else {
            showMessage("The cash provided atlease be equal to the bill amount");
        }
    } else {
        showMessage("Invalid Bill Amount");
    }
});

// functions
function hideMessage() {
    errorMessage.style.display = "none";
}

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < avaliableNotes.length; i++) {
        const numberofNotes = Math.trunc(amountToBeReturned / avaliableNotes[0]);
        amountToBeReturned %= avaliableNotes[i];
        noOfNotes[i].innerText = numberofNotes;
    }
}
console.log(BillAmount);

function showMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.innerHTML = message;
}