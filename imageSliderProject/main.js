const pictures = [
    "image1",
    "image2",
    "image3",
    "image4",
    "image5",
]

const buttonDOM = document.querySelectorAll(".btn");
const imgDivDOM = document.querySelector(".img-container");

let counter = 0;

function changePicture() {
    buttonDOM.forEach((button) => {
        button.addEventListener("click", (e) => {
            if (button.classList.contains("btn-left")) {
                counter--;
                if (counter < 0) {
                    counter = pictures.length - 1;
                }
                imgDivDOM.style.background = `url("./img/${pictures[counter]}.jpg")`
            }
    
            if (button.classList.contains("btn-right")) {
                counter++;
                if (counter > pictures.length - 1) {
                    counter = 0;
                }
                imgDivDOM.style.background = `url("./img/${pictures[counter]}.jpg")`
            }
    
            
        })
    })
}

changePicture();
