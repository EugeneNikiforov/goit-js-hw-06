const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", () => {
    const dataLength = textInput.getAttribute("data-length");
    const value = textInput.value;
    textInput.classList.remove("invalid", "valid");
    if (value.length < dataLength || value.length > dataLength) {
        textInput.classList.add("invalid"); return;
    }
    else { textInput.classList.add("valid"); 
}

});