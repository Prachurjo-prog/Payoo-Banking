console.log("Login page script loaded");

document.getElementById('login').addEventListener('click', function(){
    const number = document.getElementById('input-num');
    const numValue = number.value;
    console.log(numValue);

    const pin = document.getElementById('input-pin');
    const pinValue = pin.value;
    console.log(pinValue);

    if (numValue == "01705830946" && pinValue == "2008"){
        alert("Login Successfull !")

        // window.location.replace('/home.html')
        window.location.assign('/home.html')
    } else{
        alert("Login Falied !")
    }
})
