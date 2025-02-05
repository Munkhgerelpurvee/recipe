export default class Likes{
    constructor() {
        this.likes = [];
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
        return like;
    }
// Like устгах функц
    deleteLike(id) {
            // 1. id-гэдэг ID-тай like-ийн индексийг массиваас хайж олно.
            const index = this.likes.findIndex(el => el.id === id)
            // 2. Уг индекс дээрх элементийг массиваас устгана
           this.likes.splice(index, 1);

    }

    // Одоо ямар нэгэн id-дамжуулахад энэ id-тай жор like-лагдсан байна уу эсвэл үгүй юу гэдгийг мэдэх шаардлага гарна.
    isLiked(id) {
    //   if(this.likes.findIndex(el => el.id === id) === -1) return false;
    //    else return true;
    return this.likes.findIndex(el => el.id === id) !== -1;
    /*
    findIndex(el => el.id === id) ийм id-тай юм байх юм бол -1 хасах нэгээс ялгаатай утга гарна. Хасах нэг ирэх юм бол -1 !== -1 тэнцүү биш буюу false болоод байхгүй гэж хэлнэ.
    */
    }
//Нийт хэдэн элемент like-лагдсан эсэхийг мэдэх function
  getNumberOfLikes() {
    return this.likes.length;
  }
}