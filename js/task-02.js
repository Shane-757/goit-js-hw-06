const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')

const newIngredients = new DocumentFragment();

ingredients.forEach((ingredient) => {
  const li = document.createElement('li');
  li.innerHTML = ingredient;
  newIngredients.appendChild(li);
})
ingredientsList.appendChild(newIngredients);
