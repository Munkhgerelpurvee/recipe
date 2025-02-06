import Search from './model/Search';
import { elements, renderLoader, clearLoader } from './view/base';
import * as searchView from './view/searchView';
import Recipe from './model/Recipe';
import { renderRecipe, clearRecipe, highLightSelectedRecipe} from './view/recipeView';
import Basket from './model/Basket';
import * as basketView from './view/basketView';
import Like from './model/Like';
import * as likesView from './view/likesView'



const state = {};
// App эхлэх үед like-menu-ийг хаах
likesView.toggleLikeMenu(0);
/**
 * 
 * MVC 
 * model ===> controller <=== view
 * 
 * controller гэдэг нь энэ index.js-хэсэг дотор байгаа model and view хоёрыг хооронд нь холбож өгдөг зүйл юм.
 * 
 * const controlRecipe = () => {
     // 1. URL-аас ID-ийг салгаж авна.
     // 2. Жорын моделийг үүсгэж өгнө (lesson120 дээр хийсэн)
     //3. UI буюу дэлгэцийг бэлтгэнэ
     //4.Жороо татаж авчирна.
     //5. Жорыг гүйцэтгэх хугацаа болон орцыг тооцоолно
     //6. Жороо дэлгэцэнд гаргана

Энд дэлгэц гэсэн дээр нь view-ийг ашиглана харин жор гэсэн дээр нь моделийг ашиглана.

http://localhost:8080/#35478  энэ хэсгээс id-салгаж авахдаа энэ хэсгийг window дотор location гэж property байдаг тэр нь энэ хаягийг зааж байдаг байгаа.
//   


Нэг жор дээр дарахад #35478  гарч байгаа нь searchView дээр гарч байгаа нэг ширхэг жор буюу li дотор а-link-ээр хуудас дотор шижилт хийхэд # -ийг ашигладаг.

href="#${recipe.recipe_id} энэ hash-солигдох болгонд window object дотор event үүсэж байдаг. Энэ hashchange event-ийг олж аваад, энэ http://localhost:8080/#35478  энэ URL-ээс id-ийг нь салгаж аваад тухайн id-ийг Recipe.js-model-руу өгч тухайн жорыг id-гаар нь татаж авчирч дэлгэц дээр гаргана.

<a class="results__link" href="#${recipe.recipe_id}">
http://localhost:8080/#35478 --гарч байгаа нь 
hash: "#35477"
  
}
 * 
 */


/**
 * Хайлтын контроллер
 */
const controlSearch = async () => {
    // console.log('Submit дарагдлаа');
    // 1. Вэбээс хайлтын түлхүүр үгийг гаргаж авна. 
    const query = searchView.getInput();
    
    if(query) {
         // 2. Шинээр хайлтын обьектийг үүсгэж state-рүүгээ хийнэ. (тухайн түлхүүр үгээр хайдаг)
          state.search = new Search(query);
         // 3. Хайлт хийхэд зориулж дэлгэцийг бэлтгэнэ.
     
         searchView.clearSearchQeury();
         searchView.clearSearchResult();
     //     Хайлт хийхэд эргэлддэг сум гаргах
         renderLoader(elements.searchResultDiv)
         // 4. Хайлтыг гүйцэтгэнэ.
         await state.search.doSearch();
     
         // 5. Хайлтын үр дүнг дэлгэцэнд үзүүлнэ.
        //  console.log(state.search.result);
         clearLoader();
        if(state.search.result === undefined) alert('Хайлтаар ийм илэрц алга!');
        else searchView.renderRecipes(state.search.result);
        
         

     }
    
};

     elements.searchForm.addEventListener('submit', e => {
    /*

     энэ суман функцийн e => --- гэдэг parameter-ээр нь вэб дээрх submit event дамжигдаж орж ирнэ. Хайх гэдэг дээр дарахаар submit-гэдэг үйлдэл хийгдээд байгаа. form --нь default-аар submit-дарахаар дахин reload -хйигддэг байгаа. Тэгээд console.log('Submit дарагдлаа'); бичиг харагдаад алба болоод байгаа. Энэ default-зан чанарыг нь болиулах хэрэгтэй. 
      e.preventDefault(); --- дуудаж default-оор reload-хийхийг нь болиулна.
     */

     e.preventDefault();
     controlSearch();
});

elements.pageButtons.addEventListener('click', el => {
const btn = el.target.closest('.btn-inline');
if(btn) {

     const goToPageNumber = parseInt(btn.dataset.goto, 10);
     // Хэрвээ товч байх юм бол хайлтынхаа үр дүнг цэвэрлэнэ.
     searchView.clearSearchResult();
     // Дараагийн хуудас руу шилжүүлнэ
     searchView.renderRecipes(state.search.result, goToPageNumber);
     //  searchView.clearSearchResult(); дээр очиж өмнөх товчийг цэвэрлэж өгнө
}
});

/**
 * Жорын контроллер
 */
// const res = new Recipe(47746);
// res.getRecipe();


const controlRecipe =  async () => {
     // 1. URL-аас ID-ийг салгаж авна.
const id = window.location.hash.replace('#', '');
     // 1.Лайкийн моделийг үүсгэнэ. (if(state.likes === false) --- like нь хоосон бол шинээр үүсгэ)
     if(!state.likes)state.likes = new Like();
     // URL-дээр id-байгаа эсэхийг шалгана
    if(id) {
         
              // 2. Жорын моделийг үүсгэж өгнө (lesson120 дээр хийсэн - үүнийг state-руу хийж өгнө)
              state.recipe = new Recipe(id);
         
              //3. UI буюу дэлгэцийг бэлтгэнэ
              clearRecipe();
              renderLoader(elements.recipeDiv);
              highLightSelectedRecipe(id);
         
              //4.Жороо татаж авчирна.
                   await  state.recipe.getRecipe();
              //5. Жорыг гүйцэтгэх хугацаа болон орцыг тооцоолно
              clearLoader();
              state.recipe.calcTime();
              state.recipe.calcHuniiToo();
         
              //6. Жороо дэлгэцэнд гаргана
         
              // console.log(state.recipe); (view-гээ ашиглаад дэлгэц дээр гаргана.)
              renderRecipe(state.recipe, state.likes.isLiked(id));


    }

  
};
// Доорх кодыг арай илүү хялбарчлан бичвэл
// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);
 ['hashchange', 'load'].forEach( event => window.addEventListener(event, controlRecipe) );

 /**
 * Найрлаганы контроллер (сагсны)
 */

  /**
 * Найрлаганы контроллер маань сагсанд хийх товч дарагдахад уг контроллер ажиллаж орцуудыг миний сагсны модел руу хийж өгнө. Гэтэл апп анх эхлэхэд манай сагсанд хийх товч харагдахгүй буюу байхгүй байгаа. Тиймээс уг товчны гаднах том div -дээр нь <div class="recipe">
 *  event Listener тавьж өгвөл тухайн div-дээр хаана дарагдсан ч баригдана. Тэгээд дараа нь яг тухайн товчны зураг дээр дарагдахад буюу click-хийхэд event listener-барьж авч хариу үйлдэл үзүүлдэг болгоно.
 */

 const controlBasket = () => {
     // Найрлаганы иоделийг үүсгэнэ (Basket model)

     state.basket = new Basket();
     /*
   window.tt = state.basket; гэж түр зуур console дээр тестлэх зорилгоор моделоо window object дээр tt- гэсэн хувьсагчинд дуудаж console дээр window.tt-- гэж дуудаад дараа нь найрлагын эхний элементийг нь устагх улаан товч дээр устгаж үзээд дараа нь дахин window.tt-- дахин дуудаж эхний элемеэнт устсан эсэхийг тест хийж харцгаая.
     */
     window.tt = state.basket;
     // Өмнө нь харагдаж байсан найрлагуудыг дэлгэцээс цэвэрлэнэ.
     basketView.clearItems();


     // Уг иодел руу одоо харагдаж байгаа жорны бүх найрлагыг авч хийнэ. 
  state.recipe.ingredients.forEach(n => {
         // model Тухайн найрлагыг модел руу хийнэ
    const basketItem =  state.basket.addItem(n);

     
     // view Тухайн найрлагыг дэлгэцэнд гаргана.
     basketView.renderItem(basketItem)
})
}

 /**
 * Like контроллер (Зүрх)
 */
const controlLike = () => {
     // console.log('Like control clicked...');
     // Зүрх дарагдсан жорыг авч like.js модел руу хийх
     // 1.Лайкийн моделийг үүсгэнэ. (if(state.likes === false) --- like нь хоосон бол шинээр үүсгэ)
     if(!state.likes)state.likes = new Like();

     // 2.Одоо харагдаж байгаа жорын id-ийг олж авах
     const currentRecipeId = state.recipe.id;


     // 3.Энэ id-тай жорыг  лайк -хийсэн эсэхийг шалгах
     if(state.likes.isLiked(currentRecipeId)) {
          // 4.Лайк-хийсэн бол лайк хийснийг нь болиулна.
          state.likes.deleteLike(currentRecipeId);
          //  Харагдаж байгаа like Цэснээс устгана(Menu дээрх зүрхнээс устгана)
          likesView.deleteLike(currentRecipeId);
          // Like товчны лайкалсан байдлыг болиулах
          likesView.toggleLikeBtn(false);
          // console.log('Like хийсэн байна');
          // console.log(state.likes);
          

     } else {

          // 5.Лайк-хийгээгүй бол лайк хийнэ
          // console.log('Like хийгээгүй байна');
       const newLike = state.likes.addLike(
               currentRecipeId,
               state.recipe.tiitle,
               state.recipe.publisher,
               state.recipe.image_url );
               // Энд шинээр үүссэн Like-ийг render хийнэ.
               /*
               likesView.renderLike(newLike); энд newLike-ийг яаж авах вэ гэхлээр манай addLike функц маань үүссэн like-аа буцааж байгаа. 
               */
          //     Like цэсэнд энэ лайкыг оруулах
               likesView.renderLike(newLike);
                  // Like товчны лайкалсан байдлыг like-хийсэн болгох
               likesView.toggleLikeBtn(true);

          };
          // console.log(state.likes);

          // Like хийсэн хийгээгүй аль ч тохиолдолд дуудах тул like-нөхцлийн дотор бичихгүй тусад нь хамгийн доор бичив. Аргументаар нь хэдэн ширхэг like-байгаа, байхгүй эсэхийг дамжуулна.

          likesView.toggleLikeMenu(state.likes.getNumberOfLikes());
     
};



 elements.recipeDiv.addEventListener('click', (e) => {
//   console.log('click ...');
if(e.target.matches('.recipe__btn, .recipe__btn * ')) {
     controlBasket();
     
} else if(e.target.matches('.recipe__love, .recipe__love *')) {
     controlLike();
}
 } )


/*

Одоо Миний сагс гэсэн хэсэгт найрлагуудаа гаргаж харуулахын тулд сагсны view -хэсгээр гаргах тул basketView -хэсгийг бичиж өгнө.
*/

elements.shoppingBasket.addEventListener('click', e => {
     // console.log('Clicked shopping basket');
     // const obj = e.target.closest('.shopping__item');
     // obj.dataset.itemid;
     // console.log(obj);
     // console.log(obj.dataset.itemid);
// Click хийсэн li-элементийн data-itemid аттрибутыг шүүж гаргаж авах
      const id = e.target.closest('.shopping__item').dataset.itemid;

     //  Дээрх олдсон id-тай найрлагыг моделоос устгана.
     state.basket.deleteItem(id);

     /*
     id-тай найрлагыг моделоос устгахыг түр туршиж үзэхийн тулд дээр үүсгэсэн моделоо window обьектод хийж өгөөд console дээр дуудаж устгаж байгааг шалгах боломжтой байгаа
     window.tt = state.basket;
     */
     // Дэлгэцээс ийм id-тай найрлагыг олж бас устгана
     basketView.deleteItem(id);

     
})