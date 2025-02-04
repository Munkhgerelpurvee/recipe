import Search from './model/Search';
import { elements, renderLoader, clearLoader } from './view/base';
import * as searchView from './view/searchView';
import Recipe from './model/Recipe';
import { renderRecipe, clearRecipe} from './view/recipeView';



const state = {};
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
const id = window.location.hash.replace('#', '')

/*
const id = window.location.hash; 
console.log(id);
#2ec050 console.log(id); Одоо бидэнд эндээс урдах #-хэрэггүй ард талын тоо нь хэрэгтэй байгаа түүнийг авна. 
#2ec050 - нь string тул replace() функц ашиглан энэ #-ийг нь хоосон тэмдэгтээр солиод -id-гаа гаргаж авч болно.
*/
console.log(id);

     // 2. Жорын моделийг үүсгэж өгнө (lesson120 дээр хийсэн - үүнийг state-руу хийж өгнө)
     state.recipe = new Recipe(id);

     //3. UI буюу дэлгэцийг бэлтгэнэ
     clearRecipe();
     renderLoader(elements.recipeDiv);
     //4.Жороо татаж авчирна.
          await  state.recipe.getRecipe();
     //5. Жорыг гүйцэтгэх хугацаа болон орцыг тооцоолно
     clearLoader();
     state.recipe.calcTime();
     state.recipe.calcHuniiToo();

     //6. Жороо дэлгэцэнд гаргана

     // console.log(state.recipe); (view-гээ ашиглаад дэлгэц дээр гаргана.)
     renderRecipe(state.recipe);

  
};

window.addEventListener('hashchange', controlRecipe);
window.addEventListener('load', controlRecipe);
