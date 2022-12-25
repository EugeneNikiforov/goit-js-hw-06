const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
// const pushIngredients = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`).join("");
const pushIngredients = ingredients.map(item => {
  const items = document.createElement(`li`)
  items.classList.add(`item`)
  items.textContent = item
  return items
})
// ingredientsList.innerHTML = pushIngredients;
ingredientsList.append(...pushIngredients);