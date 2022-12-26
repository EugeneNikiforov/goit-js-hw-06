const nameInput = document.querySelector(`#name-input`)

const nameOutput = document.querySelector(`#name-output`)

nameInput.addEventListener(`input`, saveValue)
function saveValue(event) {
    if (event.currentTarget.value !== "") {
       return nameOutput.textContent = event.currentTarget.value } 
    return nameOutput.textContent = "Anonymous"
}