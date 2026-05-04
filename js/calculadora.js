let currentValue = 0;
let beforeValue = null;
let operator = null;
let waitingSec = false;

const display = document.querySelector(".result");

function output(n) {
    display.innerText = n;
}


function clickNumber(num) {
    if (waitingSec){
        currentValue = num;
        waitingSec = false;
        console.log("valor atual " + currentValue);
        
    } else {
        currentValue = currentValue === 0
        ? num
        : currentValue + num;
        console.log("valor atual " + currentValue)
    }

    return currentValue
}

function clickOperator(op) {
    beforeValue = currentValue;
    operator = op; 
    waitingSec = true;
    
    return operator;
}


function displayClear() {
    currentValue = "";
    display.innerText = currentValue;

}


const buttons = document.querySelector(".buttons")
buttons.addEventListener('click', (e) =>{
    const clicked = e.target;
    if (clicked.classList.contains("btn-number")) {
        clickNumber(clicked.innerText);
        output(currentValue);
        // console.log("número: " + clicked.innerText);
        
    }
    if (clicked.classList.contains("operator")) {
        operator = clicked.innerText;
        clickOperator(operator)
        // console.log("operador" + operator);
    }

    if (clicked.classList.contains("btn-clear")) {
        displayClear();
        // console.log("limpo " + currentValue);
        
    }

    if (clicked.classList.contains("btn-equal")) {
        console.log("resultado");
        
    }

})
