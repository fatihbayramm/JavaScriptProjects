const containerDOM = document.querySelector(".container");
const itemDOM = document.querySelector(".item");
const imgDOM = ["img/pp.jpg"];
const increaseBtnDOM = document.querySelector("#increase-btn");
const deacreaseBtnDOM = document.querySelector("#deacrease-btn");
const counterDOM = document.querySelector(".counter");

let counter = 1;
counterDOM.innerHTML = counter;

function addPerson() {
    increaseBtnDOM.addEventListener("click", () => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const name = document.createElement("h3");
        name.innerHTML = "Fatih Bayram";
        img.src = imgDOM;
        img.classList.add("img");
        div.appendChild(img);
        div.appendChild(name);
        div.classList.add("item");
        containerDOM.appendChild(div);
        counter++;
        counterDOM.innerHTML = counter;
    })
}

function removePerson() {
    deacreaseBtnDOM.addEventListener("click", () => {
        if (counter == -1 ) {
            containerDOM.lastElementChild.remove();
            counter = 0;
            counterDOM.innerHTML = counter;
        } else {
            containerDOM.lastElementChild.remove();
            counter--;
            counterDOM.innerHTML = counter;
        }
    })
}

addPerson();
removePerson();


