import Search from './model/Search';
import { elements } from './view/base';
import * as searchView from './view/searchView'

/*
Web app-ийн төлөв
-Хайлтын query, үр дүн
-Тухайн үзүүлж байгаа жор
-Лайкласан жорууд
-Захиалж байгаа жорын найрлагууд 
гэх мэт олон хэрэгтэй өгөгдлүүдийг state-гэдэг нэг газар хадгална.Ингэснээр олон контроллер дотроос тухайн state-руу хандаад хэрэгтэй мэдээллээ авах боломжийг өгнө.

Одоо хайх товч дээр event Listener холбож өгье. Тэр event Listener-цаанаа манай контроллерыг дуудаж өгнө.

*/

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
         // 4. Хайлтыг гүйцэтгэнэ.
         await state.search.doSearch();
     
         // 5. Хайлтын үр дүнг дэлгэцэнд үзүүлнэ.
        //  console.log(state.search.result);

        if(state.search.result === undefined) alert('Хайлтаар ийм илэрц алга!');
        else console.log(searchView.renderRecipes(state.search.result));
        
         

     }
    
};

     elements.searchForm.addEventListener('submit', e => {
    /*

     энэ суман функцийн e => --- гэдэг parameter-ээр нь вэб дээрх submit event дамжигдаж орж ирнэ. Хайх гэдэг дээр дарахаар submit-гэдэг үйлдэл хийгдээд байгаа. form --нь default-аар submit-дарахаар дахин reload -хйигддэг байгаа. Тэгээд console.log('Submit дарагдлаа'); бичиг харагдаад алба болоод байгаа. Энэ default-зан чанарыг нь болиулах хэрэгтэй. 
      e.preventDefault(); --- дуудаж default-оор reload-хийхийг нь болиулна.
     */

     e.preventDefault();
     controlSearch();
})
