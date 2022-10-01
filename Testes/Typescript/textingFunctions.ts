const add  = (a:number, b:number):void => console.log(a+b) 
// add(1, 23)

function concatenacao (x :number, y?: number):number {
	return x+y
}
// console.log( concatenacao(1, 2) );

function sumArray(...numbers : number[]) :number {
    
    return numbers.reduce( (x, y, z) =>{
        return (x - y) * z
    }, 3)

}

// console.log( sumArray(23, 34, 55, 1,2,3,4,4,5, 10) );

let number3 :number = 0
let arrayBig :number[] = []
while(number3 < 300000){
    number3++
    arrayBig.push(number3)
}

let object2 :object = {...arrayBig}
console.table(object2)
