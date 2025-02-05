import { elements } from "./base";


export const renderItem = (item) => {

    const html = `
          <li class="shopping__item">
                    <p class="shopping__description">${item}</p>
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

/*


🔴 Алдаа:
insertAdjacentElement дээр дараах алдаа гарч байна:
Uncaught TypeError: Failed to execute 'insertAdjacentElement' on 'Element': parameter 2 is not of type 'Element'.
Энэ нь insertAdjacentElement функцийн хоёр дахь параметр Element (DOM элемент) байх ёстой гэсэн үг юм. Гэтэл та html хувьсагчийг элементийн оронд string хэлбэрээр өгчээ.
html нь string (HTML код агуулсан текст) байгаа бөгөөд insertAdjacentElement нь DOM элемент хүлээж авдаг.
 Юу өөрчилсөн бэ?
html-ийг string хэлбэрээр шууд дамжуулахаа больсон.
document.createElement('div') ашиглан түр зуурын div үүсгэсэн.
tempDiv.innerHTML = html гэж бичиж, html-ийг түр зуурын div дотор байршуулсан.
tempDiv.firstElementChild ашиглан бодит li элементийг гаргаж авсан.
insertAdjacentElement дотор element (бодит DOM элемент) дамжуулсан.

*/
}


/*
Өөрийгөө цэвэрлэдэг функц бичиж өгнө буЮу Өмнө нь харагдаж байсан найрлагуудыг дэлгэцээс цэвэрлэнэ.
*/

export const clearItems = () => {
    elements.shoppingBasket.innerHTML = '';
}