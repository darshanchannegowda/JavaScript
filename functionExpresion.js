// function declaration  = define a reusableblock of code that performas a specific task

// function expression = way to define fucntion as values or variables

// const hello = function(){
//     console.log("helo ");
// }
// hello()

//first way 
numbrs=[1,2,3,4,5,6,7]
// const hlo = numbrs.map(square)

// console.log(hlo)

// function square(element){
    //     return Math.pow(element, 2);
    // }
    
    // secoond way 
    
    const hlo = numbrs.map(function(element){
        return Math.pow(element, 2);
    })
    
console.log(hlo)

