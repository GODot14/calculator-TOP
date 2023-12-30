function add(a, b) {
	return a + b;
};

function subtract(a, b) {
	return a - b;
};

function multiply(a) {
  let totalMulti = 1;
  a.forEach(element => {
    totalMulti *= element;
  })
  return totalMulti;
};

function divide(a, b) {
    return a / b;
}