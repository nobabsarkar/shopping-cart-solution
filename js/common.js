function getTextElementValueById(elementId) {
  const phoneTotalElement = document.getElementById(elementId);
  const currentPhoneTotalString = phoneTotalElement.innerText;
  const currentPhoneTotal = parseInt(currentPhoneTotalString);
  return currentPhoneTotal;
}

function setextElementValueById(elementId, value) {
  const subTotalElement = document.getElementById(elementId, value);
  subTotalElement.innerText = value;
}

function calculateSubTotal() {
  const currentPhoneTotal = getTextElementValueById("phone-total");
  const currentCaseTotal = getTextElementValueById("case-total");
  const currentSubTotal = currentPhoneTotal + currentCaseTotal;

  setextElementValueById("sub-total", currentSubTotal);

  // calculate tax
  const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
  const taxAmount = parseFloat(taxAmountString);
  setextElementValueById("tax-amount", taxAmount);

  const finalAmount = currentSubTotal + taxAmount;
  setextElementValueById("final-total", finalAmount);
}
