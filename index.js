"use strict";

// variables
const bill = document.getElementById("bill_id");
const pple = document.getElementById("pple_id");
const custom = document.getElementById("custom-id");
const tipAmount = document.getElementById("amount_dollar");
const totalAmount = document.getElementById("total_dollar");
const reset = document.getElementById("reset_id");
const percents = Array.from(document.querySelectorAll(".percent"));
const error1 = document.querySelector(".error1")
const error2 = document.querySelector(".error2")
var clicked = false;
let percentStr;

// easy reset function
function myReset() {
    location.reload();
};

// the function of changing colors when clicking the buttons
function changeColor(elem) {
    checkInput();

    percents.forEach((btn) => {
        btn.style.background = "#00474b";
        btn.style.color = "#ffffff";
        clicked = true;
    });

    elem.style.background = "#26c2ae";
    elem.style.color = "#00474b";
    percentStr = elem.textContent;

    let percent = parseInt(percentStr);

    fullAmount(percent);

};

// function of inputs
bill.addEventListener("input", function () {
    checkInput();
    if (Number(bill.value) > 0) {
        let percent = parseInt(percentStr);
        fullAmount(percent);
    }
});

pple.addEventListener("input", function () {
    checkInput();
    if (Number(pple.value) > 0) {
        let percent = parseInt(percentStr);
        fullAmount(percent);
    }
});

custom.addEventListener("input", function () {
    checkInput();
    percentStr = custom.value;

    percents.forEach((btn) => {
        btn.style.background = "#00474b";
        btn.style.color = "#ffffff";
    });

    let percent = Number(percentStr);
    fullAmount(percent);
});

// the function of the message that must be sent to us in case of an error
function checkInput() {
    if (Number(pple.value) === 0) {
        error2.style.display = "block";
        pple.style.border = "2px solid #e17457";
    } else if (Number(pple.value) > 0) {
        error2.style.display = "none";
        pple.style.border = "0px solid";
    }
    if (Number(bill.value) === 0) {
        error1.style.display = "block";
        bill.style.border = "2px solid #e17457";
    } else if (Number(bill.value) > 0) {
        error1.style.display = "none";
        bill.style.border = "0px solid";
    }
};

// calculation function
function fullAmount(percent) {
    let tip_Amount = ((bill.value / 100) * percent) / pple.value;
    let total_Amount = (bill.value / pple.value) + tip_Amount;

    if (Number(bill.value) > 0 && Number(pple.value) > 0 && clicked == true) {
        tipAmount.textContent = "$" + tip_Amount.toFixed(2);
        totalAmount.textContent = "$" + total_Amount.toFixed(2);
    }
};

