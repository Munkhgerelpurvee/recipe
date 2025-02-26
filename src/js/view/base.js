export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput:document.querySelector('.search__field'),
    searchResultList:document.querySelector('.results__list'),
    searchResultDiv:document.querySelector('.results'),
    pageButtons:document.querySelector('.results__pages'),
   recipeDiv:document.querySelector('.recipe'),
   shoppingBasket: document.querySelector('.shopping__list'),
   likesMune:document.querySelector('.likes__field'),
   likesListMune:document.querySelector('.likes__list'),
    

};
// Css-ийн class-ийн нэрийг холихгүй нэг нэгдсэн газар хэрэглээд явна
export const elementStrings = {
    loader:'loader'
};

// Do loader
export const renderLoader = (parent) => {
const loader = `
   <div class="${elementStrings.loader}">
                    <svg>
                        <use href="img/icons.svg#icon-cw"</use>
                    </svg>
                </div>
                `;

  parent.insertAdjacentHTML('afterbegin', loader)
};
// Delete loader
export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if(loader) loader.parentElement.removeChild(loader); 
}