const recipeListEl = document.getElementById("recipe-list");
const recipes = [
  {
    title: "Bisi Bele Bath",
    image: "img/1.png",
    extendedIngredients: [
      { original: "Rice" },
      { original: "Toor Dal" },
      { original: "Tamarind & Spices" }
    ],
    sourceUrl: "#"
  },
  {
    title: "Ragi Mudde with Sambar",
    image: "img/2.png",
    extendedIngredients: [
      { original: "Ragi Flour" },
      { original: "Water" },
      { original: "Salt" }
    ],
    sourceUrl: "#"
  },
  {
    title: "Mysore Masala Dosa",
    image: "img/3.png",
    extendedIngredients: [
      { original: "Rice & Urad Dal Batter" },
      { original: "Potato Palya" },
      { original: "Chutney Powder" }
    ],
    sourceUrl: "#"
  }
];
function displayRecipes(recipes) {
  recipeListEl.innerHTML = recipes.map(r => `
    <li class="recipe-item">
      <img src="${r.image}" alt="${r.title}">
      <h2>${r.title}</h2>
      <p><strong>Ingredients:</strong> ${r.extendedIngredients.map(i => i.original).join(", ")}</p>
      <a href="${r.sourceUrl}" target="_blank">View Recipe</a>
    </li>
  `).join("");
}
displayRecipes(recipes);
