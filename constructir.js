// constructor = special methods for defining the properties and methods of the object



function detail(name, age, color){
    this.name=name;
    this.age=age;
    this.color=color;
}


const d = new detail("darshan", 21, "black")
console.log(d.name)
console.log(d.age)
console.log(d.color)