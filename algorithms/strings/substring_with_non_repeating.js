function lengthOfLongestSubstring(str) {
  let left = 0
  let length = 0
  
  const chars = {}
  for (let right = 0;  right < str.length; right++) {
    let char = str[right]

    if (!chars[char]) {
      chars[char] = right
    } else {
      // Duplicate found
      left = Math.max(left, chars[char] +  1) // Go to next index of original index of duplicate
      chars[char] = right
    }
    length = Math.max(length, right - left + 1) // Calculate max length after every iteration
  }

  return length
}

const ans = lengthOfLongestSubstring("pwwkew") // "abba"
console.log("length of longest substring = ", ans)