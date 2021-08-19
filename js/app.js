function getpin(){
    const pin = Math.round(Math.random()*10000);
    const pinLength = pin + '';
    if(pinLength.length == 4){
        return pin
    }
    else{
        return getpin();
    }
}
function generatePin(){
    const getPin =  getpin();
    document.getElementById('show-pin').value = getPin;         
}
document.getElementById('number').addEventListener('click',function(event){
    const number =  event.target.innerText;
    const numberInput = document.getElementById('number-input');
    if (isNaN(number)){
        if (number =='C'){
            numberInput.value = '';
        }
    }
    else{
        const previousNumber = numberInput.value;
        const newNumber = previousNumber + number;
        numberInput.value = newNumber ;
    }
})
document.getElementById('submit-b').addEventListener('click',function(){  
    const Input = document.getElementById('number-input');
    const InputNumber = Input.value;
    const generate = document.getElementById('show-pin');
    const generateValue = generate.value;
    const successMsg = document.getElementById('success-msg');
    const errorMsg = document.getElementById('dontmatch-msg')
    if(InputNumber == generateValue){
        successMsg.style.display = 'block';
        errorMsg.style.display = 'none';
    }
    else{
        successMsg.style.display = 'none';
        errorMsg.style.display = 'block';
        const tryLeft= document.getElementById('try-left');
        const tryLeftvalue = tryLeft.innerText;
        const newTryLeft = parseInt(tryLeftvalue) - 1;
        if(newTryLeft>=0){
            tryLeft.innerText = newTryLeft;
        }
        
    }
})