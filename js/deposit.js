const DepositButton = document.getElementById("buttonDeposit").addEventListener("click",function(){
 
const initialDepositFieldAmount = document.getElementById("DepositField");
const initialDepositFieldAmountstring = initialDepositFieldAmount.value;
const newinitialDepositFieldAmount = parseFloat(initialDepositFieldAmountstring);


const initialDepositTotalAmount = document.getElementById("DepositTotal");
const DepositTotalString = initialDepositTotalAmount.innerText;
const newDepositTotal = parseFloat(DepositTotalString);

const FinalDepositTotalAmount = newinitialDepositFieldAmount+ newDepositTotal;

initialDepositTotalAmount.innerText = FinalDepositTotalAmount;

//balance calculation

const initialBalance = document.getElementById("BalanceTotal");
const initalBalanceString = initialBalance.innerText;
const newInitialBalance = parseFloat(initalBalanceString);

const FinalBalance = newInitialBalance + FinalDepositTotalAmount;

initialBalance.innerText = FinalBalance;

initialDepositFieldAmount.value = '';
});