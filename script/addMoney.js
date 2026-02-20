document.getElementById('add-money-btn').addEventListener('click', function(){
    const bankAccount = getValueFormInput('add-money-bank');
    if(bankAccount === 'Select bank'){
        alert('Please select a bank account');
        return;
    }
    
    const accountNo = getValueFormInput('add-money-number');
    if(accountNo.length !== 11){
        alert("Please enter a valid account number");
        return;
    }

    const amount = getValueFormInput('add-money-amount');
    const newBalance = getBalance() + Number(amount);

    const pin = getValueFormInput('add-money-pin');
    if(pin == '2008'){
        alert('Add money successfully');
        setBalance(newBalance);
    } else{
        alert('Wrong pin');
        return;
    }
})