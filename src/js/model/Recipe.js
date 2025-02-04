/*
Lesson120 
Өнөөдрийн хичээлээр жорын модел бичнэ. Search-хэсгээс нэг жор сонгоод тухайн жорыг дэлгэрэнгүйгээр нь харуулна. 
 Гэхдээ сэрвэрээс уг жорыг id-гаар нь дахиж татаж авчирна. Уг жорын өгөгдлийг нь хадгалах жор гэдэг модел хэрэгтэй. Үүнийг recipe.js-гэж нэрлэе.


*/
/*
Уг модел нь тухайн жорыг id-гаар нь татаж авчраад үзүүлнэ.Тиймээс axios-ийг хэрэглэнэ.

*/

import axios from 'axios';
export default class Recipe {
    constructor(id) {
    this.id = id;

    }

  async getRecipe () {
    const result = await axios('https://forkify-api.herokuapp.com/api/get?rId=' + this.id);
    this.image_urlt = result.data.recipe.image_url
    this.ingredients = result.data.recipe.ingredients
    this.publisher = result.data.recipe.publisher;
    this.publisher_url = result.data.recipe.publisher_url
    this.recipe_id = result.data.recipe.recipe_id
    this.title = result.data.recipe.publisher;
    this.social_rank = result.data.recipe.social_rank
    this.source_url = result.data.recipe.source_url
 
    
      // console.log(result);
    
      // console.log(this.title);

    // console.log(this.ingredients);
    // console.log(this.publisher_url);
    // console.log(this.title);

    };
       
   
}