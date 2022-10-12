
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const newItems = ingredients.map((ingredient) =>{
  const ingredientsItem = document.createElement('li');
  ingredientsItem.classList.add("item");
  ingredientsItem.textContent = ingredient;
  return ingredientsItem;

});
const addIngredientsItem = document.querySelector('ul');
addIngredientsItem.append(...newItems);

console.log(addIngredientsItem);





