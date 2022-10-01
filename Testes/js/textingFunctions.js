const add = (a, b) => console.log(a + b);
// add(1, 23)
function concatenacao(x, y) {
    return x + y;
}
// console.log( concatenacao(1, 2) );
function sumArray(...numbers) {
    return numbers.reduce((x, y, z) => {
        return (x - y) * z;
    }, 3);
}
// console.log( sumArray(23, 34, 55, 1,2,3,4,4,5, 10) );
let number3 = 0;
let arrayBig = [];
while (number3 < 300000) {
    number3++;
    arrayBig.push(number3);
}
let object2 = { ...arrayBig };
console.table(object2);
