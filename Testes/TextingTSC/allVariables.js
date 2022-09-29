// This is a simple file that contains all the variables that I know in ts
var number = 12;
var string = "A string";
var bool = true;
var array = ["String1", "String2", "string3"];
var object = { "x": 1, "y": 2 };
var variable = null;
// This is a exemple of a any and a HTMLElement 
// let element :HTMLElement | null = document.querySelector("h1");
var amyVariable;
var tuple = ["aString", 1, 2];
var groupOfConst;
(function (groupOfConst) {
    groupOfConst[groupOfConst["const1"] = 0] = "const1";
    groupOfConst[groupOfConst["const2"] = 1] = "const2";
    groupOfConst[groupOfConst["const3"] = 2] = "const3";
})(groupOfConst || (groupOfConst = {}));
var someFunction = console.log('Hello');
var result;
function sum(x, y) {
    if (typeof x == "string" || typeof y == "string")
        error("Erro");
    result = "".concat(x) + y;
    console.log(result);
}
function error(error) {
    throw new Error(error);
}
// sum(1, '3')
