const multiply = (...numbers) => {
  return numbers.reduce((sum, value) => sum * value);
};

// module.exports.multiply = multiply;
// module.exports.description = "Mnożenie to działanie matematyczne...";
module.exports = {
  multiply,
  description: "Mnożenie to działanie matematyczne...",
};
