function Password(str) {
  let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return pattern.test(str);
}
console.log(Password("Abc123"));