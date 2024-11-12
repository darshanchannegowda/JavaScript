// object

// const obj={
//     name:"darshan",
//     age:21,
//     hi: function(element){
//         console.log(`hello ${element}`);
//     },
//     eat: function(){console.log("i am eating")}
// }

// obj.hi("darshan");
// obj.eat();


// using "this"
const obj={
    name:"darshan",
    age:21,
    food: "chicken",
    hi: function(){
        console.log(`hello ${this.name}`);
    },
    eat: function(){console.log(`i am eating ${this.food}`)}
}

obj.hi();
obj.eat();