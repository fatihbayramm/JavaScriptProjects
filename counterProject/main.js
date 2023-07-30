let number = 0;
const counterDOM = document.querySelector("#counter");
const increaseBtnDOM = document.querySelector("#increase-button");
const decreaseBtnDOM = document.querySelector("#decrease-button");
const resetBtnDOM = document.querySelector("#reset-button");
counterDOM.innerHTML = number;
counterDOM.style.color = "gray";

function colorControl() {
    if (number < 0 ) {
        counterDOM.style.color = "red";
    } else if (number === 0) {
        counterDOM.style.color = "gray";
    } else{
        counterDOM.style.color = "green";
    };
    
}

function increaseCounter() {
    increaseBtnDOM.addEventListener("click", () => {
        number++;
        counterDOM.innerHTML = number;
        colorControl();
    });
}

function decreaseCounter() {
    decreaseBtnDOM.addEventListener("click", () => {
        number--;
        counterDOM.innerHTML = number;
        colorControl();
    });
}   

function resetCounter() {
    resetBtnDOM.addEventListener("click", () => {
        number = 0
        counterDOM.innerHTML = number;
        colorControl();
    });
}

increaseCounter();
decreaseCounter();
resetCounter();


