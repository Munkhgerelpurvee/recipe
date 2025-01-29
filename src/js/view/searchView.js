/*
Энд 2 ширхэг функц бичээд named export хийж үзүүлнэ.Учир нь 2 юм экспрот хийх тохиолдолд export default--- гэж гаргаж болохгүй. named-ийг ингэж {} хаалт дотор хийж import-олж авна.
import { add,multiply, id } from'./view/searchView';

Энд заавал бүгдийг экспорт хийх албагүй храин далд хэлбэрээр ашиглах боломжтой.
Гол архитектурын санаа нь гаднах бусад модул бол зөвхөн энэ add()-функцийг л харна бас ашиглаж чадна.
 Харин хэзээ ч superAdd-ийг ашиглаж чадахгүй юм.


*/  

var superAdd = (a,b) => {
    return a + b + 3000;
}
export const add = (a, b) => superAdd(a, b);
export let multiply = (c, d) => c * d;
export const id = 25;