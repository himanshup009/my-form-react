function Email(str) {
  let pattern = /^[\w.]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(str);
}
console.log( Email("hello@example.com"));