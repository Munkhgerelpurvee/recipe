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
    this.publisher = result.data.recipe.publisher;
    this.ingredients = result.data.recipe.ingredients
    this.image_urlt = result.data.recipe.image_url
    this.recipe_id = result.data.recipe.recipe_id
    this.title = result.data.recipe.publisher;
    this.publisher_url = result.data.recipe.publisher_url
 

  
    console.log(this.title);
    console.log(this.ingredients);
    console.log(this.publisher_url);
    console.log(this.title);

    };
       
   
}