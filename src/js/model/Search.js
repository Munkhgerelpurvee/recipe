import axios from 'axios';

/*
Seach маань хайлтын query-ийг
дотроо хадгална.Мөн query-ийн үр дүнг дотроо хадгална.Үүнйиг class ашиглаж хийнэ.Тухайн классыг экспорт хийж гаргах бөгөөд хэрэгтэй газар нь импорт хийж тухайн классыг ашиглана.
*/

export default class Search {
    constructor(query) {
        // Энэ query-ийг дотроо хадгална.
        this.query = query;
    }
    // Хайлт хийнэ Класс дотор function гэдэг түлхүүр үгийг хэрэглэдэггүй
    async  doSearch(search) {
        try {
            let result = await axios('https://forkify-api.herokuapp.com/api/search?q=' + this.query);
            // console.log(result);
           this.result = result.data.recipes;
           return this.result;
        } catch(error) {
            alert('Асуудал гарлаа : ' + error);
        }
        
    };

}