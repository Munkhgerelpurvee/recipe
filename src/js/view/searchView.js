import { elements } from "./base"

// нэг жорыг дэлгэц дээр гаргаж өгдөг нэг функцтэй гэж үзье
// Private function
const renderRecipe = (recipe) => {
    // console.log(recipe);
    
    // console.log(recipe.title);
    const markup = `
       <li>
                    <a class="results__link" href="#${recipe.recipe_id}">
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
    elements.pageButtons.innerHTML = '';
}

export const getInput = () => elements.searchInput.value;
// бүх жорыг авчирдаг функц 

// Бүх жорын массивыг хайхаас гадна яг тэддүгээр хуудас шүү гэдгийг хэлдэг болгоё

export const renderRecipes = (recipes, currentPage = 1, resultPerPage = 10) => {
    // хайлтын үр дүнг хууудаслаж үзүүлэх
    // Page=2 , start=10, end =20
const start = (currentPage -1) * resultPerPage;
const end = currentPage * resultPerPage;

// энд хуудаслалтын start-аас end хүртэл нь зүсэж авч харуулна.
recipes.slice(start, end).forEach(el => renderRecipe(el));

// Хуудаслалтын товчуудыг гаргаж ирэх function
// renderButtons(page, ) эхний аргументаар яг одоо  аль хуудас дээр байгаагаа мэднэ. 2 дахь аргументаар нийт хэдэн хуудастай юм бэ? гэдгийг мэдэх ёстой.

const totalPages = Math.ceil(recipes.length / resultPerPage);
renderButtons(currentPage, totalPages)
};
// Суман функцийн нэг онцлог нь зарласнаас нь доош нь л дууддаг байгаа. Тэгэхээр createButton -ийг renderButtons -функцийн дээр нь зарлаж өгнө.

// createButton function нь html буцааж байгаа. 
// type ===> 'prev', 'next'
const createButton = (page, type, direction) => `
     <button class="btn-inline results__btn--${type}" data-goto = ${page}>
     <span>Хуудас ${page}</span>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-${direction}"></use>
                    </svg>
     </button>
`
const renderButtons = (currentPage, totalPages) => {
    /*
    let buttonHtml; --- гэдэг хувьсагч руу тухайн товчны бүх html-ийг бичиж аваачаад хадгална.
    */
    let buttonHtml;
    if(currentPage === 1 && totalPages > 1) {
        //1-р хуудас дээр байна. 2-р хуудас гэдэг товчийг гарга.
        buttonHtml = createButton(2, 'next', 'right');

    } else if(currentPage < totalPages) {
        // Дунд хуудас дээр байна.
        // Өмнөх болон дараачийн хуудас руу шилжих товчуудын үзүүл
        buttonHtml = createButton(currentPage - 1, 'prev', 'left');
        buttonHtml += createButton(currentPage + 1, 'next', 'right');

    } else if(currentPage === totalPages) {
        // Хамгийн сүүлийн хуудас гэдэг бол currentPage === totalPage
        // хамгийн сүүлийн хуудас дээр байна. Өмнөх хуудас руу шилжүүлэх товчийг л үзүүлнэ.
        buttonHtml = createButton(currentPage - 1, 'prev', 'left');
    }

    // 
    elements.pageButtons.insertAdjacentHTML('afterbegin', buttonHtml)
};


/*
min-0:27 
хуудас 2-гэпэг дээр дарахаар шилждэг болгохыг хэрхэн хийх вэ? Дөнгөж эхлэхэд товчнууд байхгүй байгаа. Тэгвэл байхгүй байгаа зүйл дээр хэрхэн дээр нь click event--- тавих юм бэ?


        <div class="results__pages">
                <!-- <button class="btn-inline results__btn--prev">
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-left"></use>
                    </svg>
                    <span>Хуудас 1</span>
                </button>
                <button class="btn-inline results__btn--next">
                    <span>Хуудас 3</span>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-right"></use>
                    </svg>
                </button>      -->
        </div> энэ 2 товч дээр биш харин гаднах div-дээр нь буюу  <div class="results__pages"> дээр click event-тавьснаар аль button дээр дарагдсныг мэддэг арга байна.

        index.js--дээр очоод
<div class="results__pages"> --- дээр listener тавьж өгнө.
Аль товч нь дарагдсаныг олоходо:

elements.pageButtons.addEventListener('click', el => {
const btn = el.target.closest('.btn-inline');
});

энэ el =>  гэдэг манай click хийгдсэн эвент байгаа.
el.target ---гэхээр DOM дээрх click хийгдсэн обьект нь гарч ирдэг байгаа.
closest() ---гэдэг функц нь target-дотор байгаа хамгийн ойрхон '.btn-inline' ийм класстай CSS-элементэд хамгийн ойрхон байгаа тухайн DOM дээр байгаа элементийг олж өгдөг байгаа.Манай 2 товч 2лаа '.btn-inline'---класстай байгаа.Тэгээд дарсан товч нь  btn---дээр ороод ирнэ.

Ийм байдлаар гаднах div-дээр нь event listener---тавингаа дотор нь байгаа 2 товчын аль нь дарагдсаныг олж авах аргын тухай үзлээ.


*/

/*
минут-0:34 Товчин дотор юм хадгалахдаа : 
<button class="btn-inline results__btn--prev data-goto = 1
">
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-left"></use>
                    </svg>
                    <span>Хуудас 1</span>
                </button>

                data-goto = 1 -*--гэж ийм байдлаар хадгалаж болно. Тэгвэл дараа нь ингэж бичсэн attribute руу JavaScript-ээс хандах боломжтой байдаг.Тухайн обьектын data-set гэдэг  attribute дотор goto--- гэдэг нэртэй юм ороод ирнэ.Түүний утгыг харахаар хадгалсан утга буюу 1 гэж гарч ирнэ.

                Орчин үеийн HTML дотор data-... гэсэн html явж байгаа нь JavaScript-д уг өгөгдлийг дамжуулахын тулд хийдэг байна.

  const createButton = (page, type, direction) => `
     <button class="btn-inline results__btn--${type}" data-goto = ${page}>
     <span>Хуудас ${page}</span>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-${direction}"></use>
                    </svg>
     </button>
`
Хуудас3 ---дээр очоод inspect ---хийгээд харахад data-goto="3" гэж харагдана.

  const goToPageNumber = btn.dataset.goto
 btn.dataset.goto --- рүү "3" гэдэг ороод ирэх байгаа. Гэхдээ data-goto="3" нь тэмдэгт мөр байна. Үүнийг тоо руу шилжүүлнэ.

  const goToPageNumber = parseInt(btn.dataset.goto, 10);
*/