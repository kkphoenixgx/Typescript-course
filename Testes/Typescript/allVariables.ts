// This is a simple file that contains all the variables that I know in ts

let number :number = 12
let string :string = "A string"
let bool :boolean = true
let array :string[] = ["String1", "String2", "string3"]
let object :object = {"x" : 1, "y" : 2}

let variable:null = null;
// This is a exemple of a any and a HTMLElement 
// let element :HTMLElement | null = document.querySelector("h1");

let amyVariable :any;
let tuple :[string, number, number] = ["aString", 1, 2]

enum groupOfConst {
    const1,
    const2,
    const3
}

let someFunction :void = console.log('Hello')

let result :unknown

function sum( x :  number | string, y: number | string ) :void {
    
    if(typeof x == "string" || typeof y == "string" ) error("Erro") 
    
    result = `${x}` + y;
    console.log(result)
}

function error (error :string) :never {
    throw new Error(error)
}

// sum(1, '3')