export default class Likes{
    constructor() {
        // LocalStorage-оос юм уншиж чадсан бол уншсан юмаа өгнө
        this.readDataFromLocalStorage();
        // Хэрвээ LocalStorage-оос юм уншиж чадаагүй бол if(!this.likes)---this.likes = []; хоосон массив өгнө.
        if(!this.likes) this.likes = [];
    }
// Like хадгалах функц
    addLike(id, title, publisher,img) {
        const like = {
            id:id,
            title:title,
            publisher:publisher,
            img:img
        }
        this.likes.push(like);
        // storage руу хадгалана. Класс дотроосоо классынхаа функцүүдийг дуудахдаа урд талд нь this - гэж заавал бичиж өгнө
        this.savedataToLocalStorage();
        return like;
    }
// Like устгах функц
    deleteLike(id) {
            // 1. id-гэдэг ID-тай like-ийн индексийг массиваас хайж олно.
            const index = this.likes.findIndex(el => el.id === id)
            // 2. Уг индекс дээрх элементийг массиваас устгана
           this.likes.splice(index, 1);
           this.savedataToLocalStorage();

    }

    // Одоо ямар нэгэн id-дамжуулахад энэ id-тай жор like-лагдсан байна уу эсвэл үгүй юу гэдгийг мэдэх шаардлага гарна.
    isLiked(id) {
    //   if(this.likes.findIndex(el => el.id === id) === -1) return false;
    //    else return true;
    return this.likes.findIndex(el => el.id === id) !== -1;
    /*
    findIndex(el => el.id === id) ийм id-тай юм байх юм бол -1 хасах нэгээс ялгаатай утга гарна. Хасах нэг ирэх юм бол -1 !== -1 тэнцүү биш буюу false болоод байхгүй гэж хэлнэ.

     JSON.stringify( this.likes) JSON.stringify-function нь энэ массивыг бүгдийг нь давталт хийж байгаад доторх бүх утгуудыг нь нэг string болгож залгаад JSON болгож хувиргадаг байгаа.Тэгэхээр бид json байдлаар хадгална гэсэн үг юм. Одоо үүнийгээ addLike хийх болгонд дуудаж хадгалаад явна. Мөн like-ээс элемент устгах болгонд мөн дуудна.
    */
    }
//Нийт хэдэн элемент like-лагдсан эсэхийг мэдэх function
  getNumberOfLikes() {
    return this.likes.length;
  }
//   localStorage -дээр хадгалдаг функц
savedataToLocalStorage() {
    localStorage.setItem('likes', JSON.stringify(this.likes))
}
// Програм эхлэхэд storage дотор like дарсан жор байвал эхлэхэд storage - дотроос уншаад зүрхэн дотор харагдах ёстой байгаа түүнийг хийе. localStorage.getItem('likes')--- энэ нь бүх лайкуудыг нийлүүлчихсэн string json байдлаар ирж байгаа.Үүнийг буцаагаад json-оос нь javaScript object болгож хувиргана.Үүнийг JSON.parse() гэдэг обьект хийдэг байгаа.
readDataFromLocalStorage() {
 this.likes = JSON.parse(localStorage.getItem('likes')) 
}
};

/*
  // LocalStorage-оос юм уншиж чадсан бол уншсан юмаа өгнө
        this.readDataFromLocalStorage();
        // Хэрвээ LocalStorage-оос юм уншиж чадаагүй бол if(!this.likes)---this.likes = []; хоосон массив өгнө.
        if(!this.likes) this.likes = []; энд прогорам эхлэхэд модел дээр лайк байвал уншигдаж байгаа ч гэсэн view --- дээр хэрхэн байгаа бол харагдуулах вэ?
        LocalStorage-оос модел руу ороод ирсэн лайкыг хэрхэн view дээр харуулах вэ? ӨХ windows.load дээр хийж өгнө

*/
