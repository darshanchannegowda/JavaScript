// class = provide a more structured and cleaner way to work with objects more cleaner way 

class Product{
    constructor(name, price){
        this.name= name;
        this.price= price;
    }
    displayProduct(){
        console.log(`my name is ${this.name} and ${this.price}`)
    }
}

const p = new Product("darshan", 20);
p.displayProduct();