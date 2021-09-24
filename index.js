var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given")
var checkButton = document.querySelector("#check-button");
var errorMessage = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");

//converting to numbers
const BillAmount = Number(billAmount.value);
const CashGiven = Number(cashGiven.value);

const avaliableNotes = [2000, 500, 100, 20, 10, 5, 1];


checkButton.addEventListener("click", function validateBillAmount() {
    

const BillAmount = Number(billAmount.value);
const CashGiven = Number(cashGiven.value);

    
    if (BillAmount > 0 && CashGiven > 0) {
        hideMessage();
        if (CashGiven >= BillAmount) {
            const amountToBeReturned = CashGiven - BillAmount;
            calculateChange(amountToBeReturned); //passing vakue to calculate change
        } else {
            showMessage("The cash provided atlease be equal to the bill amount");
        }
    } else {
        showMessage("Invalid cash Given");
    }
});

// functions
function hideMessage() {
    errorMessage.style.display = "none";
}

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < avaliableNotes.length; ++i) {
        const numberofNotes = Math.trunc(amountToBeReturned / avaliableNotes[i]);
        amountToBeReturned %= avaliableNotes[i];
        noOfNotes[i].innerText = numberofNotes;
    }
}


function showMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.innerHTML = message;
}
