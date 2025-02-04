import { elements } from "./base";

const renderNairlaga = (orts) =>  `
     <li class="recipe__item">
                        <svg class="recipe__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                       
                        <div class="recipe__ingredient">
            
                            ${orts}
                        </div>
                    </li>
    
    `





export const clearRecipe = () => {
    // Одоо дэлгэц дээр харагдаж байгаа жорыг арилгана
    elements.recipeDiv.innerHTML = '';
};

/*
ingredients-гэдэг 
массив дотор олон жорууд байгаа 
 түүнд давталт хийгээд түүнийг li-ийн оронд гаргана.
  ${recipe.ingredients.map(el => renderNairlaga(el))}

  renderNairlaga-гэдэг функцийг дуудаж өгнө

Одоо refresh хийхэд дэлгэц дээрх орц алга болоод байна. Тэгэхээр window-ийн load-гэдэг event -нь refresh хийхэд болдог байгаа. Үүнийг index.js- дээр хийж өгнө.

window.addEventListener('load', controlRecipe);

Одоо цаашаа зүрхэн дээр дарахад like-гэдэг хэсэг рүү оруулж ирнэ. Browser нь storage гэдэг мэдээллийг түр хадгалдаг өгөгдлийн сан буюу баазтай байдаг түүнд нь like-ийг хадгална. Цаана сэрвэр дээрээ хадгалахгүй байгаа.
Буцаад liked болсноо харахад storage-ээс уншиж гаргаж ирж харна. Тэгэхээр browser дээр хадгалагпах юм байна. Мөн сагсанд хийх хэсэг хийгээд манай төсөл дуусах болно.
*/



export const renderRecipe = (recipe) => {
    // энэ жорыг дэлгэцэнд гаргаж үзүүлнэ
    // this.image_url = result.data.recipe.image_url
    // this.ingredients = result.data.recipe.ingredients
    // this.publisher = result.data.recipe.publisher;
    // this.publisher_url = result.data.recipe.publisher_url
    // this.recipe_id = result.data.recipe.recipe_id
    // this.title = result.data.recipe.title
    // this.social_rank = result.data.recipe.social_rank
    // this.source_url = result.data.recipe.source_url
const html = `

 <figure class="recipe__fig">
                <img src="${recipe.image_url}" alt="${recipe.title}" class="recipe__img">
                <h1 class="recipe__title">
                    <span>${recipe.title}</span>
                </h1>
            </figure>
            <div class="recipe__details">
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="img/icons.svg#icon-stopwatch"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--minutes">${recipe.time}</span>
                    <span class="recipe__info-text"> минут </span>
                </div>
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="img/icons.svg#icon-man"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--people">${recipe.huniiToo}</span>
                    <span class="recipe__info-text"> хүний орц</span>

                    <div class="recipe__info-buttons">
                        <button class="btn-tiny">
                            <svg>
                                <use href="img/icons.svg#icon-circle-with-minus"></use>
                            </svg>
                        </button>
                        <button class="btn-tiny">
                            <svg>
                                <use href="img/icons.svg#icon-circle-with-plus"></use>
                            </svg>
                        </button>
                    </div>

                </div>
                <button class="recipe__love">
                    <svg class="header__likes">
                        <use href="img/icons.svg#icon-heart-outlined"></use>
                    </svg>
                </button>
            </div>



            <div class="recipe__ingredients">
                <ul class="recipe__ingredient-list">
                ${recipe.ingredients.map(el => renderNairlaga(el)).join('')}

            
                </ul>

                <button class="btn-small recipe__btn">
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-shopping-cart"></use>
                    </svg>
                    <span>САГСАНД ХИЙХ</span>
                </button>
            </div>

            <div class="recipe__directions">
                <h2 class="heading-2">Хэрхэн бэлтгэх вэ</h2>
                <p class="recipe__directions-text">
                    Жорыг бэлтгэж оруулсан
                    <span class="recipe__by">${recipe.publisher}</span>. Манай вэб сайтаас жорын зааврыг авна уу
                </p>
                <a class="btn-small recipe__btn" href="${recipe.source_url}" target="_blank">
                    <span>ЗААВАР ҮЗЭХ</span>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-right"></use>
                    </svg>

                </a>
            </div>
`
elements.recipeDiv.insertAdjacentHTML('afterBegin',html);

}