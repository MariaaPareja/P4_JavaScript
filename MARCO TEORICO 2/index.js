// A) USO DE VARIABLE Y CONSTANTES
var variable = 1; //forma inicial de declarar variables
console.log("Variable: " + variable);
var variable2;
console.log("Variable 3: " + variable2)//variable utilizada antes de declararse
variable2 = 2;
console.log("Variable 3: " + variable2)

//OTRA FORMA DE DECLARAR ES LET, LE DA AMBITO DE VARIABEL
let variableLet3 = 8;
{
    let variableLetDentro = 9;
    var variableVarDentro = 10;
}
console.log("Valor: " + variableLet3);
console.log("Valor: " + variableVarDentro);
console.log("Valor: " + variableLetDentro);

//Variable CONST,  no se puede modificaar
const variableConst = 10;
variableConst = 12;

// B) ELEVACION DE VARIABLES
console.log(x === undefined); // true
var x = 3;
// devolverá un valor de undefined
var myvar = 'my value';
(function() {
    console.log(myVar); // undefined
    var myvar = 'valor local';
})();

// C) USO DE CONSOLELOG Y SCOPE, AMBITO O ALCANCE

let variableLet = 5;// ALCANCE GLOBAL
console.log("valor", variableLet);
{
    console.log("valor", variableLet);
    let variable1 = 10; //AlCANCE LOCAL
    console.log("valor", variable1);
}
//console.log("valor", variableLet2); //uncaught porque es una variable de alcance local

//tipos de console
console.error("Este es un errror");
console.warn("alerta");

// D) USO DE TIPOS DE DATOS Y CAMBIO DE TIPOS DE DATOS
//1
var answer = 42;
console.log(answer);
answer = 'Gracias por todo el pescado...';
console.log(answer);

//7.
var howMany = 10;
alert("howMany.toString() is " + howMany.toString()); // displays "10"
alert("45 .toString() is " + 45 .toString()); //displays "45"
var x = 7;
alert(x.toString(2)) // Displays "111"

//3.
parseInt("F", 16);
parseInt("17", 8);
parseInt("15", 10);
parseInt(15.99, 10);
parseInt("FXX123", 16);
parseInt("1111", 2);
parseInt("15*3", 10);
parseInt("12", 13);
parseInt("Hello", 8); // No es un número en absoluto
parseInt("0x7", 10); // No es de base 10
parseInt("546", 2); // Los dígitos no son válidos para representaciones binarias.
