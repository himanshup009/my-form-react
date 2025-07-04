function Indian(str) {
  let pattern = /^[6-9]\d{9}$/;
  return pattern.test(str);
}
console.log(Indian("9876543210"));
