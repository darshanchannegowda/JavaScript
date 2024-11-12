const student = ["a1sD","fds","safde"];

const r = student.map(upperCs)
console.log(r)
const l = student.map(lowerCs)
console.log(l)

function upperCs(element){
return element.toUpperCase()
}
function lowerCs(element){
return element.toLowerCase()
}