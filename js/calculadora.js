const state = {

    currentValue: 0,
    beforeValue: null,
    operator: null,
    waitingSec: false
}
    
const display = document.querySelector(".result");

function output(a) {
    display.innerText = a;

}


function clickNumber(num) {
    if (state.waitingSec){
        state.currentValue = num;
        state.waitingSec = false;
        
    } else {
        state.currentValue = state.currentValue === 0
        ? num
        : state.currentValue + num;
    }
}

function clickOperator(op) {
    state.beforeValue = state.currentValue;
    state.operator = op; 
    state.waitingSec = true;

}

function displayClear() {
    state.currentValue = 0;
    state.beforeValue = null;
    state.operator = null;
    state.waitingSec = false;

    display.innerText = state.currentValue;

}


const buttons = document.querySelector(".buttons")
buttons.addEventListener('click', (e) =>{
    const clicked = e.target;
    if (clicked.classList.contains("btn-number")) {
        state.currentValue = clickNumber(clicked.innerText);
        console.log(state);
    
        
        
        output(state.currentValue);
        // console.log("número: " + clicked.innerText);
        
    }
    if (clicked.classList.contains("operator")) {
        operator = clicked.innerText;
        clickOperator(operator)
        console.log("operador " + operator);
    }

    if (clicked.classList.contains("btn-clear")) {
        displayClear();
        
    }

    if (clicked.classList.contains("btn-equal")) {
        console.log("resultado");
        
    }

})


function calculate(a, b) {
    
    
}