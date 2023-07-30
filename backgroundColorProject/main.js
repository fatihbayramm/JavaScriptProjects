const backgroundColorBtnDOM = 
document.querySelector(".change-background-color-btn");

const changeBackground = function () {
    backgroundColorBtnDOM.onclick = () => {
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
    
        let colors = `rgb(${red}, ${green}, ${blue})`;
    
        document.body.style.backgroundColor = colors;
    }
}

changeBackground();
