let currentValue = "0";
let beforeValue = null;
let operator = null;
let waitingSec = false;

function clickNumber(num) {
    if (waitingSec){
        currentValue = num;
        waitingSec = false
    } else {
        currentValue = currentValue === "0"
            ? num
            : currentValue + num;
    }
}

function clickOperator(op) {
    beforeValue = currentValue;
    operator = op; 
    waitingSec = true;
}

function displayClear() {
    currentValue = "0"
}


const buttons = document.querySelector(".buttons")
buttons.addEventListener('click', (e) =>{
    const clicked = e.target;
    if (clicked.classList.contains("btn-number")) {
        console.log("número: " + clicked.innerText);
        
    }
    if (clicked.classList.contains("sum")) {
        console.log()
    }

})