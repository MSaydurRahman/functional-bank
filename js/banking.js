

function getInputValue(inputId) {
    const input = document.getElementById(inputId)
    const inputAmountText = input.value;
    const inputValue = parseFloat(inputAmountText);
    input.value = '';
    return inputValue;

}
function getFieldTotal(fieldTotal, amount) {
    // debugger;
    const total = document.getElementById(fieldTotal)
    const InputText = total.innerText;
    const prevInput = parseFloat(InputText)
    totalAmount = amount + prevInput
    total.innerText = totalAmount;
}
function getBalance() {
    const totaBalance = document.getElementById('total-balance');
    const newBalanceText = totaBalance.innerText;
    const newBalance = parseFloat(newBalanceText);
    return newBalance;
}
function getTotallBalance(input, isAdd) {
    const totaBalance = document.getElementById('total-balance');
    const newBalance = getBalance()
    if (isAdd == true) {
        newTotalBalance = newBalance + input
        totaBalance.innerText = newTotalBalance;
    }
    else {
        newTotalBalance = newBalance - input
        totaBalance.innerText = newTotalBalance;
    }
}
// handle diposit button event 
document.getElementById('diposit-button').addEventListener('click', function () {

    const newDepositInput = getInputValue('diposit-input')
    if (newDepositInput > 0) {
        getFieldTotal('diposite-total', newDepositInput)
        getTotallBalance(newDepositInput, true);
    }

})


// handle withdraw button event 
document.getElementById('withdraw-button').addEventListener('click', function () {

    const newWithdrawInput = getInputValue('withdraw-input');
    const newBalance = getBalance()
    if (newWithdrawInput > 0 && newWithdrawInput < newBalance) {
        getFieldTotal('withdraw-total', newWithdrawInput)
        getTotallBalance(newWithdrawInput, false)
    }
    if (newWithdrawInput > newBalance) {
        alert('please give a right amount!')
    }

})