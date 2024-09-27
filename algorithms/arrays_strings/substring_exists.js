function subStrExists(str, targetword) {
  let j = 0;
  let k = 0;
 
  while (Boolean(targetword[j]) && Boolean(str[k])) {
    if (targetword[j] == str[k]) {
      j +=1
      k +=1
    } else {
      j = 0
      k += 1
    }
  }
  
  if (j == targetword.length) {
    console.log("substring found")
  }
}



subStrExists("He is very happy person", "er")