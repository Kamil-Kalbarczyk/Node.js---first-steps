// Każdy plik js posiada module.exports (można też posługiwać się samym exports - bez module), do którego domyślnie przypisany jest pusty obiekt {}.
// console.log(module.exports);

const add = require("./components/add");
const { multiply, description } = require("./components/multiply");
// const multiply = require("./components/multiply");

const addResult = add(2, 43, 4);
console.log(addResult);

// const multiplyResult = multiply.multiply(2, 2, 5);
const multiplyResult = multiply(2, 2, 5);
console.log(multiplyResult);
console.log(description);
