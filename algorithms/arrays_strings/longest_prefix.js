function longestPrefix(strs) {
  let prefix = strs[0];

  for(let i=1; i < strs.length; i++) {
    const str = strs[i];
    while (str.indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length-1);
    }
  }

  return prefix;
}


const strs = ["flower","flow","flight"]; // ["dog","racecar","car"]
const prefix = longestPrefix(strs);

console.log("prefix = ", prefix);