document.getElementById('btn-withdraw').addEventListener('click', function(){
const withdrawField = document.getElementById('withdraw-field');
const newWithdrawString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawString);

const withdrawTotalElement = document.getElementById('withdraw-total');
const previusWithdrawString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previusWithdrawString);


const curentWithdrwTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotalElement.innerText = curentWithdrwTotal;


const balanceTotalElement = document.getElementById('balance-total');
     const balanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalString);

    const curentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = curentBalanceTotal;
    withdrawField.value = "";
})