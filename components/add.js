const addNumber = (...numbers) => {
  //   console.log(numbers);
  return numbers.reduce((sum, value) => sum + value);
};

module.exports = addNumber;
