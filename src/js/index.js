import Search from './model/Search';
import { elements, renderLoader, clearLoader } from './view/base';
import * as searchView from './view/searchView';
import Recipe from './model/Recipe';



const state = {};
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


const res = new Recipe(47746);
res.getRecipe();
