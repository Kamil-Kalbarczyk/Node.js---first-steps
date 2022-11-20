// Każdy plik js posiada module.exports (można też posługiwać się samym exports - bez module), do którego domyślnie przypisany jest pusty obiekt {}.
// console.log(module.exports);

const add = require("./components/add");
const multiply = require("./components/multiply");

add(2, 43, 4);
