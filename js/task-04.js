let counterValue = 0;
const value = document.querySelector(`#value`);
const decrementBtn = document.querySelector(`button[data-action="decrement"]`);
const incrementBtn = document.querySelector(`button[data-action="increment"]`);
incrementBtn.addEventListener(`click`, () => { counterValue += 1; value.textContent = counterValue; });
decrementBtn.addEventListener(`click`, () => { counterValue -= 1; value.textContent = counterValue; });