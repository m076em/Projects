

let result_displayed = false;
const operators = ['+', '-', 'x', '÷', '%', '^'];
const additive_operators = ['+', '-'];

function appendNumberToDisplay(buttonElement) {
  const display = document.getElementById("display");
  display.value += buttonElement.innerText;
}

function appendOperatorToDisplay(buttonElement) {
    const display = document.getElementById("display")

}

function appendToDisplay(buttonElement) {
    const display = document.getElementById("display");
    let char = buttonElement.innerText;
    if (isNumber(char)) {
        if (result_displayed){
            display.value = buttonElement.innerText;
            result_displayed = false
        }
        else {
            display.value += buttonElement.innerText;

        }
        
    }
    else if (isOperator(char))
    {
        // console.log("INPUT CHARACTER IS OPERATOR")
        if (isOperator(charAt(display,-1))) {
            // console.log("LAST CHARACTER IS ALSO OPERATOR")
            // if (isAdditiveOperator(charAt(display,-1)) && isAdditiveOperator(char)) {
            //     console.log("INPUT CHARACTER AND LAST CHARACTER ARE ADDITIVE")
            //     if(isAdditiveOperator(charAt(display,-2))) {
            //         ReplaceLast(display,char);
            //     }
            //     else {
            //         display.value+=char;
            //     }

            // }
            // else {
            //     ReplaceLast(display,char);
            // }

            ReplaceLast(display,char);

        }
        else {
            // console.log("last character is NOT operator")
            display.value += char;
        }
    }
    

}

function isNumber(char) {
    return !isNaN(Number(char))
}

function isOperator(char) {
    // console.log("checking character ",char," ...");

    return operators.includes(char);  
}

function isAdditiveOperator(char) {
    return additive_operators.includes(char);

}
function charAt(display, index) {
    if (index < 0)
    {
        return display.value.charAt(display.value.length + index);
    }
    return display.value.charAt(index);

    
}

function ReplaceLast(display, char) {
    display.value = display.value.slice(0,-1) + char;

}

function equal(){
  const display = document.getElementById("display");
  if (isOperator(charAt(display,-1))){
    ReplaceLast(display,"")
  }
  display.value = eval(getExpression(display));
  result_displayed = true;
}

function resetDisplay(){
  const display = document.getElementById("display");
  display.value = "";
}

function getExpression(display)
{
    let expression = display.value.replaceAll("÷","/");
    expression = expression.replaceAll("x","*");

    return expression;

}