function findCapitalWords(str) {
  let pattern = /\b[A-Z][a-z]*\b/g;
  return str.match(pattern); 
}
console.log(findCapitalWords("India Is y Country"));