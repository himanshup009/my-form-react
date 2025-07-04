function onlyDigits(str) {
  let pattern = /^\d+$/;
  return pattern.test(str);
}
console.log(onlyDigits("123456")); 