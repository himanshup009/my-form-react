function isValidPostalCode(str) {
  let pattern = /^\d{5}$/;
  return pattern.test(str);
}
console.log(isValidPostalCode("56001"));