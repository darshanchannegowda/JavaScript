// filter() = creates new array by filtering out element

const ages = [16, 17, 28, 19, 11, 13]

const r = ages.filter(underEighteen);
console.log(r);

function underEighteen(element){
    return element<=18;
         
}

