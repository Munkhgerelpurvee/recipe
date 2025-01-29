/*
npm i --save-dev html-webpack-plugin
энэ нь comlipe хийгдэж буй js-file-ийг маань автоматаар index.html-дотор нь нэрийг нь өөрөө шивж өгөх буюу dist -дотор index.html -ийг шинээр үүсгэж өгдөг дотор нь js-file-уудыг нь шивэж өгдөг байгаа.
*/

const arr = [12, 32, 144, 2111];
let myApp = a => {
    console.log(`Number : ${a}`);
    
};

const arr2 = [...arr, 888, 333];
myApp(arr2[4]);

/*
node modules---ийг хэрхэн gitHub руу оруулахгүй байх вэ?
Тэгэхээр gitHub руу оруулахгүй зүйлсийг тохируулаад git-дээ хэлдэг байгаа.
Тэр файлыг gitignore гэдэг файлд хийж өгдөг байгаа.
*/