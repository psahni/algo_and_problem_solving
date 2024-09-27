function longestPalindrome(str) {
  let left = 0;
  let right = 0;
  let minLength = 1;
  
  for (let i=0; i < str.length; i++) {
    if (str[left] == str[right]) {
      right++;
    } else {

    }
  }
}

const s = "cbbd";
const ans = longestPalindrome(s);
console.log(ans);