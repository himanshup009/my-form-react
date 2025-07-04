function isValidDate(str) {
  let pattern = /^(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
  return pattern.test(str);
}
console.log( isValidDate("27-06-2025")); 