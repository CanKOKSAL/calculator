const input= document.querySelector(".calculator-input")
const keys= document.querySelector(".keys")

let inputValue="0";
let firstValue = null;
let operator = null;
let secondValue= false;



updateİnput();


function updateİnput(){
  input.value= inputValue;
}


keys.addEventListener("click", function(e){
  const element = e.target;
 
  if(!element.matches("button")) return;
  
  if(element.classList.contains("operator")){
    handleOperator(element.value)
    return;
  }

  if(element.classList.contains("decimal")){
    inputDecimal();
    updateİnput();
    return;
  }
  if(element.classList.contains("allClear")){
    allClear();
    updateİnput();
    return;
  }

  displayNumber(element.value),
  updateİnput();
});

function handleOperator(nextOperator){
  const value= parseFloat(inputValue);

  if(firstValue=== null){
    firstValue = value;
  } else if (operator){
    const result= calculate(firstValue,value,operator);

    inputValue=String(result);
    firstValue=result;
  }


  secondValue=true;
  operator=nextOperator

  console.log(inputValue,firstValue,operator,secondValue)
}

function calculate(first,second,operator){
  if(operator==="+"){
    return first+second;
  } else if(operator==="-"){
    return first-second;
  } else if(operator==="*"){
    return first * second;
  } else if (operator==="/"){
    return first / second;
  }

  return second;
}



function displayNumber(num){
  if(secondValue){
    inputValue=num;
    secondValue=false;
  }else{
     inputValue= inputValue=="0"? num: inputValue+num;
  }
  console.log(inputValue,firstValue,operator,secondValue)
}

function inputDecimal(){
  if(!inputValue.includes(".")){
    inputValue+= ".";
  }
}

function allClear(){
  inputValue="0";
}

