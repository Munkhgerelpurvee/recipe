import uniqid from 'uniqid';

export default class Basket {

    constructor() {
        this.items = [];
    };

    // Id-гаар нь устгадаг функц 
    deleteItem(id) {
        // 1. id-гэдэг ID-тай орцын индексийг массиваас хайж олно.
        const index = this.items.findIndex(el => el.id === id)
        // 2. Уг индекс дээрх элементийг массиваас устгана
       this.items.splice(index, 1);



    }

  addItem(item) {
    let newItem = {
        id:uniqid(),
        item:item

    };

    this.items.push(newItem);
    return newItem;
  }
  /*
  addItem -гэдэг функц рүү item-жорыг гаднаас дамжуулангуут 
  this.items = []; энэ items руу дамжуулсан жорыг хийж өгнө
  */

};
