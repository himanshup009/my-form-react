function isAnagram(str1, str2) {
 
  let sorted1 = str1.toLowerCase().split("").sort().join("");
  let sorted2 = str2.toLowerCase().split("").sort().join("");
  if(sorted1 === sorted2){
    return true
  }
  else{
    return false
  }
}

console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("hello", "world"));  
