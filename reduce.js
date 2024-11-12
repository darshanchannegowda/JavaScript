// reduce() = reduce the element of an array to a single value 

// const grades = [5,30,10,25,15,20];
const marks = [5,30,10,25,15,20];

// const max = grades.reduce(getMax);
// console.log(max)

// function getMax(accumulator, element){
//     return Math.max(accumulator, element);
// }

const total = marks.reduce(
    function sum(accumulator, element){
    return accumulator+element;
    // console.log(total.toFixed(2));
});

console.log(total.toFixed(2));

