function endsWithCom(str) {
  let pattern = /\.com$/;
  return pattern.test(str);
}
console.log(endsWithCom("example.com"));