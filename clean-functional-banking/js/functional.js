function getInputValue(fieldId) {
    const inputeFieldTag = document.getElementById(fieldId);
    const valueInText = inputeFieldTag.value;
    const value = parseFloat(valueInText);
    inputeFieldTag.value = '';
    return value;
}
function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}
function updateTotal(fieldId, amount) {
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;
}
// function updateBalance(amount, isadding) {
//     const previousBalance = getInnerTextValue('total-balance');
//     let newBalance;
//     if (isadding == true) {
//         newBalance = previousBalance + amount;
//     }
//     else {
//         newBalance = previousBalance - amount;
//     }
//     document.getElementById('total-balance').innerText = newBalance;
// }
function updateBalance() {
    const dipositTotal = getInnerTextValue('deposit-total');
    const withdrawTotal = getInnerTextValue('withdraw-total');
    const newBalance = dipositTotal - withdrawTotal + 1250;
    document.getElementById('total-balance').innerText = newBalance;
}
// handle deposit
document.getElementById('deposit-btn').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateTotal('deposit-total', amount);
        // updateBalance(amount, true);
        updateBalance();
    }
});
// handle withdraw
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('total-balance');
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        // updateBalance(amount, false);
        updateBalance();
    }
});