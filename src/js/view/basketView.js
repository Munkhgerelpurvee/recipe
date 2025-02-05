import { elements } from "./base";


export const renderItem = (item) => {

    const html = `
          <li class="shopping__item" data-itemId = ${item.id}>
                    <p class="shopping__description">${item.item}</p>
                    <button class="shopping__delete btn-tiny">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-cross"></use>
                        </svg>
                    </button>
            </li>  



   ` ;

       // 1. String-ийг бодит DOM элемент болгох
       const tempDiv = document.createElement('div');
       tempDiv.innerHTML = html;
       const element = tempDiv.firstElementChild; // li элементийг гаргаж авах
   
       // 2. insertAdjacentElement-д DOM элемент дамжуулах
       elements.shoppingBasket.insertAdjacentElement('beforeend', element);

//    elements.shoppingBasket.insertAdjacentElement('beforeend', html);
}


/*
inspect --- хийгээд харахад data-itemid="m6rgo9ej" гэж ирсэн байна.

<li class="shopping__item" data-itemid="m6rgo9ej">
                    <p class="shopping__description">6 very thin slices prosciutto (about 3 ounces)</p>
                    <button class="shopping__delete btn-tiny">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-cross"></use>
                        </svg>
                    </button>
            </li>
*/

export const clearItems = () => {
    elements.shoppingBasket.innerHTML = '';
};

export const deleteItem = (id) => {
    // 1 дэлгэцээс хайж олно
  const item = document.querySelector(`[data-itemid='${id}']`);
//   console.log(item);

  
    // 2. DOM-оос устгана
     /*
     Ямар нэгэн элемент DOM-оос устгахын тулд түүний parent -элементийг эхэлж олоод parent -аас нь removeChild-гэж устгана. Гэхдээ өөрөө өөрийгөө дамжуулж устгаан.
     */

    item.parentElement.removeChild(item)

}

/*

Манай сагсны хэсэг бүрэн хийгдэж дууслаа. Дуртай орцоо сонгож дуусгаад дараа нь энэ төслийг цааш үргэлжлүүлнэ гэвэл сагсны хэсгийн доор захиалах гэсэн товч нэмж өгөөд юу захиалсныг яаж олох вэ? гэвэл энэ захиалсан хэсэг манай модел дотор байгаа. 

Тухайн моделийг давталт хийгээд сагсан дотор юу байгааг мэднэ. Үүнийг захиалах гэсэн товчны click event listener - дээр уншиж аваад цааш төлбөр төлөх гэсэн програмчлалын хэсэг рүү ашиглаад явах байгаа.
ӨХ сагсан дотор байгааг зүйлийг дараа дараагийн програмчлалд ашиглах гэж л модел гэдэг зүйлийг ашиглаад байгаа шүү. ӨХ яг энэ сагсны хэсэгт бол моделийн хэрэглээ харагдахгүй байгаа.
*/
