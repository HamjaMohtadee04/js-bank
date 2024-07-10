const WithdrawButton = document.getElementById("buttonWithdraw").addEventListener("click", function(){
 const withdrawFieldAmount = document.getElementById("WithdrawField");
 const withdrawFieldAmountString = withdrawFieldAmount.value;
 const newWithdrawFieldAmount = parseFloat(withdrawFieldAmountString);


 const initialWithdrawTotalAmount = document.getElementById("WithdrawTotal");
 const initialWithdrawTotalAmountString = initialWithdrawTotalAmount.innerText;
 const newinitialWithdrawTotalAmount = parseFloat(initialWithdrawTotalAmountString);

 const FinaWithdrawTotalAmount = newinitialWithdrawTotalAmount+ newWithdrawFieldAmount;



 initialWithdrawTotalAmount.innerText = FinaWithdrawTotalAmount;

 //calculate balance for deposit
 const initialBalance = document.getElementById("BalanceTotal");
 const initialBalanceString = initialBalance.innerText;
 const newInitialBalance = parseFloat(initialBalanceString);

 const FinalWithdrawBalance = newInitialBalance - FinaWithdrawTotalAmount;

 initialBalance.innerText = FinalWithdrawBalance;

 withdrawFieldAmount.value ='';
});