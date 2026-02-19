document.getElementById('cashout').addEventListener('click', function(){
    const cashOutNnum = document.getElementById('cashout-num');
    const cashOut = cashOutNnum.value;
    console.log(cashOut);
    
    if(cashOut.length != 11){
        alert("Invalid Agent Number !!!")
        return;
    }
    const cashOutAmount = document.getElementById('cashOut-amount');
    const cashOutAmo = cashOutAmount.value;
    console.log(cashOutAmo);

    const balanceE = document.getElementById('balance');
    const balance = balanceE.innerText;
    console.log(balance);

    const newBalance = Number(balance) - Number(cashOutAmo);
    

    if(newBalance < 0){
        alert("Invalid Balance !!!")
    }
    return;
    

    const cashoutpin = document.getElementById('cashout-pin');
    const pin = cashoutpin.value;

    if(pin == 2008){
        alert("Cashout Successfull")
        console.log("NewBalance:", newBalance);
        balanceE.innerText = newBalance;
    } else{
       alert("Invalid Pin !!!");
        return; 
    }
    
})