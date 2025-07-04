function startsWithHello(str) {
  let pattern = /^Hello/;
  return pattern.test(str);
}
console.log( startsWithHello("Hello world"));