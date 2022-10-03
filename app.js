const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");
const img = document.querySelector(".img");
function validateInputs(dob, luckyNum) {
  if (!dob && !luckyNum) {
    outputBox.innerText = "Please enter both the fields 😡";
    return false;
  } else if (luckyNum <= 0) {
    outputBox.innerText = "Lucky Number should be greater than zero.";
    return false;
  } else {
    return true;
  }
}
function clearOutput() {
  outputBox.innerText = "";
}
function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    img.src = "./img/yes.gif";
    outputBox.innerText = "Your birthday is lucky 🚀";
  } else {
    img.src = "./img/no.gif";
    outputBox.innerText = "Your birthday is not lucky 🤒";
  }
}

function checkIfBirthDateIsLucky() {
  clearOutput();
  const dob = dateOfBirth.value;
  const luckyNumberVal = luckyNumber.value;
  console.log(luckyNumberVal);

  const sum = calculateSum(dob);
  if (validateInputs(dob, luckyNumberVal)) {
    img.src = "./img/giphy.gif";
    checkNumberButton.textContent = "Checking.....";
    setTimeout(() => {
      compareValues(sum, luckyNumberVal);
      checkNumberButton.textContent = "Check Number";
    }, 2000);
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}

checkNumberButton.addEventListener("click", checkIfBirthDateIsLucky);
