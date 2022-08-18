document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositFild = document.getElementById('deposit-fild');
    const newDepositAmountString = depositFild.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    const depositTotalElement = document.getElementById('depsit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const curentDepositTotal  = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText =curentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
     const balanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalString);
    

    const curentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = curentBalanceTotal;


    depositFild.value = '';
    
    })