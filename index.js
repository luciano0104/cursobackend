class Product{
    constructor(productIdCounter, title, description, price, thumbnail, code, stock){
        this._id = productIdCounter++;
        this._title = title;
        this._description = description;
        this._price = price;
        this._thumbnail = thumbnail;
        this._code = code;
        this._stock = stock
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
        this.products = products;
        this.productIdCounter = 1;
}
addProducts(product){
    if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error("Todos los campos son obligatorios");
        return;
    }
    if (this.products.some((product) => product.code === code)) {
        console.error("El código de producto ya está en uso");
        return;
    }
    return this.products.push(product)
}
getProducts(){
    return this.products
}
getProductsById(){
    this.products.find((product) => product.id === id);
    if (product) {
        return product;
    } else {
        console.error("Producto no encontrado");
        return null;
    }
}
}
const productManager = new ProductManager();
console.log("Productos iniciales:", productManager.getProducts()); // tiene que mostrar: "Productos iniciales: []"

productManager.addProduct(
	"producto prueba",
	"Este es un producto prueba",
	200,
	"Sin imagen",
	"abc123",
	25
);

console.log("Productos después de agregar uno:", productManager.getProducts());
productManager.addProduct(
	"producto repetido",
	"Este es un producto repetido",
	150,
	"Sin imagen",
	"abc123",
	10
);
const foundProduct = productManager.getProductById(1);
console.log("Producto encontrado por ID:", foundProduct);
const notFoundProduct = productManager.getProductById(99);