import query from './model/Search';
import { add,multiply as m, id } from'./view/searchView';



/*
npm i --save-dev html-webpack-plugin
энэ нь comlipe хийгдэж буй js-file-ийг маань автоматаар index.html-дотор нь нэрийг нь өөрөө шивж өгөх буюу dist -дотор index.html -ийг шинээр үүсгэж өгдөг дотор нь js-file-уудыг нь шивэж өгдөг байгаа.
*/



/*
node modules---ийг хэрхэн gitHub руу оруулахгүй байх вэ?
Тэгэхээр gitHub руу оруулахгүй зүйлсийг тохируулаад git-дээ хэлдэг байгаа.
Тэр файлыг.gitignore гэдэг файлд хийж өгдөг байгаа.
*/

console.log('Хайлт : ' + query);
console.log('Хоёр тооны нийлбэр бол : ' + add(6,7));
console.log('Хоёр тооны үржвэр бол : ' + m(6,5));
console.log('Id is : ' + id);
