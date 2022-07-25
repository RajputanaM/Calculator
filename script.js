const calc_display = document.querySelector('h1');
const InputButtons = document.querySelectorAll('button');
const clear_btn = document.getElementById('clearbtn');
let firstvalue = 0;
let operatorvalue = '';
let nextvalue = false;

function sendnumbervalue(number){
    if(nextvalue){
        calc_display.textContent = number;
        nextvalue = false;
    }
    else{
        const display_value = calc_display.textContent;
        calc_display.textContent = display_value === '0'? number: display_value + number;
    }
}

function adddecimal(){
    if(nextvalue) return;
    if(!calc_display.textContent.includes('.')){
        calc_display.textContent = `${calc_display.textContent}.`;
    }
}


const calculate = {
    '/': (firstvalue, secondNumber) => firstvalue / secondNumber,
  
    '*': (firstvalue, secondNumber) => firstvalue * secondNumber,
  
    '+': (firstvalue, secondNumber) => firstvalue + secondNumber,
  
    '-': (firstvalue, secondNumber) => firstvalue - secondNumber,
  
    '=': (firstvalue, secondNumber) => secondNumber,
  };

function useoperator(operator){
    const currentvalue = Number(calc_display.textContent);
    if(operatorvalue && nextvalue) {
        operatorvalue = operator;
        return;
    }
    if(!firstvalue){
        firstvalue = currentvalue;
    }
    else {
        const calculation = calculate[operatorvalue](firstvalue, currentvalue);
        calc_display.textContent = calculation;
        firstvalue = calculation;
      }
    nextvalue = true;       // 85 + 
    operatorvalue = operator;
   
}
InputButtons.forEach(element => {
    if(element.classList.length===0){
        element.addEventListener('click', ()=> sendnumbervalue(element.value));
    }
    else if(element.classList.contains('operator')){
        element.addEventListener('click', ()=> useoperator(element.value));
    }
    else if(element.classList.contains('decimal')){
        element.addEventListener('click', ()=> adddecimal());
    }
});
function clearall(){
    let firstvalue = '0';
    let operator = '';
    let nextvalue = false;
    calc_display.textContent = '0';
}
clear_btn.addEventListener('click',clearall);




