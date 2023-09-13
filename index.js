class Product{
    constructor(title, description, price, thumbnail, code, stock){
        this._title
        this._description
        this._price
        this._thumbnail
        this._code
        this._stock
    }
    get title(){
        return this._title;
    }
    set title(value){
        this._title = value;
    }
    get description(){
        return this._description;
    }
    set description(value){
        this._description = value;
    }
    get price(){
        return this._price;
    }
    set price(value){
        this._price = value;
    }
    get thumbnail(){
        return this._thumbnail;
    }
    set thumbnail(value){
        this._thumbnail = value;
    }
    get code(){
        return this._code;
    }
    set code(value){
        this._code = value;
    }
    get stock(){
        return this._stock;
    }
    set stock(value){
        this._stock = value;
    }
}

class ProductManager {
    constructor(products){
        this.products = products
}
addProducts(product){
    return this.products.push(product)
}
getProducts(){
    return this.products
}
getProductsById(){

}
}

const product1 = new Product("Producto Prueba", "Este es un producto de prueba", 200, "sin imagen", "abc123", 25)

const productManager = new ProductManager([product1])
productManager.addProducts(new Product("Producto2", "Este es un producto de prueba", 300, "sin imagen", "abc124", 28))