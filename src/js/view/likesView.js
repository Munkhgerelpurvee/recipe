import { elements } from "./base";

export const toggleLikeBtn = (isLiked) => {
const iconString = isLiked ? 'icon-heart' : 'icon-heart-outlined';
document.querySelector('.recipe__love use')
.setAttribute('href', `
    img/icons.svg#${iconString}
    `)
};

// Menu дээр байгаа зүрхийг Like-байгаа тохиолдолд харагдуулна. Харин ямар ч Like байхгүй тохиолдолд харагдахгүй болгоно. <div class="likes__field"> энэ div-ийг хайж олоод visibility буюу харагдах байдлыг нь Like Байхгүй бол hidden болгоно.
           
export const toggleLikeMenu = (numberOfLike) => {
elements.likesMune.style.visibility = numberOfLike > 0 ? 'visible' : 'hidden';
};

/*
Одоо menu-дахь зүрхэн дотор like-хийгдсэн жорыг оруулж харуулах хэрэгтэй. Үүний тулд likeView дээр renderLike функц бичиж өгнө.Тэгээд like-хийсэн жороо тэр renderLike function руугаа дамжуулаад зүрхэн дотор харагдуулах байгаа. 

  addLike(id, title, publisher,img)
*/

export const renderLike = (newLikeOrjIrne) => {
const html = `
 <li>
                    <a class="likes__link" href="#${newLikeOrjIrne.id}">
                        <figure class="likes__fig">
                            <img src="${newLikeOrjIrne.img}" alt="Test">
                        </figure>
                        <div class="likes__data">
                            <h4 class="likes__name">${newLikeOrjIrne.title}</h4>
                            <p class="likes__author">${newLikeOrjIrne.publisher}</p>
                        </div>
                    </a>
                </li>
`;

 // 1. String-ийг бодит DOM элемент болгох
 const tempDiv = document.createElement('div');
 tempDiv.innerHTML = html;
 const element = tempDiv.firstElementChild; // li элементийг гаргаж авах

 // 2. insertAdjacentElement-д DOM элемент дамжуулах
 elements.likesListMune.insertAdjacentElement('beforeend', element);
// elements.likesListMune.insertAdjacentElement('beforeend', html)
};

// disliked хийх үед зүрх дотроос жороо буцаагаад авна
/*

2 Like дарахад likesListMune рүү 2 ширхэг 
 <li>
                    <a class="likes__link" href="#${newLikeOrjIrne.id}">
                        <figure class="likes__fig">
                            <img src="${newLikeOrjIrne.img}" alt="Test">
                        </figure>
                        <div class="likes__data">
                            <h4 class="likes__name">${newLikeOrjIrne.title}</h4>
                            <p class="likes__author">${newLikeOrjIrne.publisher}</p>
                        </div>
                    </a>
                </li> энэ li-лист орсон байгаа. Одоо энэ листийг буцаагаад устгах асуудал яригдана. Энэ id-гаар нь хайж олоод
                newLikeOrjIrne.id дараа нь ийм класстай а-tag-ийг барьж аваад түүний parent-ийг олоод тэндээс нь remoceChild-устга гэж хийнэ.
                 a class="likes__link" 
*/
export const deleteLike = (id) => {
   const li = document.querySelector(`.likes__link[href*="${id}"]`).parentElement;
//    li-ийн parent нь ul байгаа
   if(li) li.parentElement.removeChild(li);

}