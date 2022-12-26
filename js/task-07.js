const fontSizeControl = document.querySelector("#font-size-control");
const textField = document.querySelector("#text");

fontSizeControl.addEventListener(`input`, textFoo);
textField.style.fontSize = `${fontSizeControl.value}px`;
function textFoo() {
    textField.style.fontSize = `${this.value}px`;
};


