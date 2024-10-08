/*
  THIS IS A SLIDING WINDOW PROBLEM
*/

// Things to remember
// 1. Save it into hash, keep counting frequency
// 2  Find max frequency at any step
// 3. Find window length (right - left + 1) 
// 4. Find non repeating chars (window length - max freq)
// 5. Compare it with 'k', if true, move the window
// Compare it with target k

function longestRepeatingCharacterReplacement(str, k) {
  let left = 0
  let length = 0
  let maxRepeatChar = 0
  const chars = {}

  for (let right = 0; right < str.length; right++) {
    const char = str[right]
 
    chars[char] = (typeof(chars[char]) == "undefined") ? 1  : chars[char]++
    
    maxRepeatChar = Math.max(maxRepeatChar, chars[char])
    let windowLength = right - left + 1
    const nonRepeatingChar = windowLength - maxRepeatChar

    if (nonRepeatingChar > k) {
      chars[left] =  chars[left] - 1
      left += 1
    }

    length = Math.max(length, right - left) // Window length is updated here.
  }

  return length
}


const ans = longestRepeatingCharacterReplacement("AABABBA", 2)
console.log("ans = ", ans)