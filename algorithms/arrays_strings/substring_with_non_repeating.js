// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
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

/**
 * Retry: Written again
 * // 3. Longest Substring Without Repeating Characters

function LongestNonRepeatingChars(str) {
  let left = 0;
  let right = 0;
  const chars = {};
  let length=0;

  for (let right=0; right < str.length; right++) {
    const s = str[right];

    if (!chars[s]) {
      chars[s] = 1;
    } else {
      chars[s] += 1;
    }

    console.log(chars);
    if (chars[s] > 1) {
      left = right;
      chars[s] = chars[s] - 1;
      continue;
    }

    length = Math.max(length, right-left+1);
  }
  return length;
}

const l = LongestNonRepeatingChars("pwwkew");
console.log(l);
 */