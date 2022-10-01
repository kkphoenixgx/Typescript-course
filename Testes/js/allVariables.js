// This is a simple file that contains all the variables that I know in ts
let number = 12;
let string = "A string";
let bool = true;
let array = ["String1", "String2", "string3"];
let object = { "x": 1, "y": 2 };
let variable = null;
// This is a exemple of a any and a HTMLElement 
// let element :HTMLElement | null = document.querySelector("h1");
let amyVariable;
let tuple = ["aString", 1, 2];
var groupOfConst;
(function (groupOfConst) {
    groupOfConst[groupOfConst["const1"] = 0] = "const1";
    groupOfConst[groupOfConst["const2"] = 1] = "const2";
    groupOfConst[groupOfConst["const3"] = 2] = "const3";
})(groupOfConst || (groupOfConst = {}));
let someFunction = console.log('Hello');
let result;
function sum(x, y) {
    if (typeof x == "string" || typeof y == "string")
        error("Erro");
    result = `${x}` + y;
    console.log(result);
}
function error(error) {
    throw new Error(error);
}
// sum(1, '3')
