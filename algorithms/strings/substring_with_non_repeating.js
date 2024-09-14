// As soon as you find the duplicate, move the left pointer to next of duplicate
// right pointer will move automatically through loop

function lengthOfLongestSubstring(str) {
  let left = 0
  let length = 0
  
  const chars = {}
  for (let right = 0;  right < str.length; right++) {
    let char = str[right]

    if (typeof(chars[char]) === "undefined") {
      chars[char] = right // We are storing indexes
    } else {
      // Duplicate found
      left = Math.max(left, chars[char] +  1) // Go to next index of original index of duplicate
      chars[char] = right
    }
    // console.log(left, right, right - left + 1)
    length = Math.max(length, right - left + 1) // Calculate max length after every iteration
  }

  return length
}

const ans = lengthOfLongestSubstring("bbbbb") // "abba"
console.log("length of longest substring = ", ans)

