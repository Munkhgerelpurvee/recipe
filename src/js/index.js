import Search from './model/Search';

/*
 Search-с класс орж ирж байгаа. Тэгэхээр классын обьект үүсгэнэ.
 let search = new Search( )-энэ Search-ийн parameter-ээр нь байгуулагч функц рүү нь ямар аргумент дамжуулах юм бэ? түүнийгээ бичиж өгнө. Байгуулагч функц нь энэ constructor(query) тэр нь query -авч байгаа түүнийг энэ дамжуулж өгнө.

 let search = new Search('pizza'); энэ let search- обьект нь дотроо query-ийг хадгалаж байгаа мөн doSearch(search) функцийг нь дуудах юм бол result-аа бас дотроо хадгална.
*/

// let search = new Search('pizza');
let search = new Search('broccoli');

search.doSearch().then(res => console.log(res));
/*
search.doSearch(); ингэж дуудах юм бол юу ч гарч ирэхгүй, учир нь зүгээр л хайгаад дотроо result-аа хадгалчихсан байгаа. Түүнийгээ  return this.result; хийж байгаа. 
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

    Энд онолоо санахад async функцээс return --- хийгдсэн юм болгон promise буцаадаг. return this.result;  ингэж буцаасан харагдаж байгаа ч promise дотор хийж буцаадаг байгаа. Promise-аар ирсэн үр дүнг яаж авах билээ?

promise-ийн then гэдэг функцийг нь дуудах буюу амлалт нь биелэгдсэн бол гэдэг функцийг дуудна. 

*/
