import { elements } from "./base"

// нэг жорыг дэлгэц дээр гаргаж өгдөг нэг функцтэй гэж үзье
// Private function
const renderRecipe = (recipe) => {
    console.log(recipe);
    
    // console.log(recipe.title);
    const markup = `
       <li>
                    <a class="results__link results__link--active" href="#${recipe.recipe_id}">
                        <figure class="results__fig">
                            <img src="${recipe.image_url}" alt="Test">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${recipe.title}</h4>
                            <p class="results__author">${recipe.publisher}</p>
                        </div>
                    </a>
                </li>
    `
    // ul 
    elements.searchResultList.insertAdjacentHTML('beforeend',markup)
};

// Хайлтын дараа талбарыг цэвэрлэх
export const clearSearchQeury = () => {
    elements.searchInput.value = ''; 
}

// Хайлтын дараа SideBar-ийн талбарыг цэвэрлэх
export const clearSearchResult = () => {
    elements.searchResultList.innerHTML = '';
}

export const getInput = () => elements.searchInput.value;
// бүх жорыг авчирдаг функц
export const renderRecipes = (recipes) => {
recipes.forEach(el => renderRecipe(el));
}
