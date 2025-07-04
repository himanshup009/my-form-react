function normalizeSpaces(str) {
  return str.replace(/\s+/g, ' ').trim();
}
console.log( normalizeSpaces("Too    many   spaces!"));