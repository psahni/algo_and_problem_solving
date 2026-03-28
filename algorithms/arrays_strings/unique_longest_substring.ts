class UniqueLongestSubstring {
  maxLength: number;

  constructor(str: string = '') {
    this.maxLength = 0;
  }

  findLongestSubstring(str: string): number {
    let left = 0;
    
    const map: Map<string, number> = new Map();

    for (let right = 0; right < str.length; right++) {
      const currentChar = str[right];

      if (map.has(currentChar)) {
        left = Math.max(left, map.get(currentChar)! +  1); // Left will always be at next to the prev position of duplicate character, so we take the max to ensure left doesn't move backwards
      }

      map.set(currentChar, right);
      this.maxLength =  Math.max(this.maxLength, right - left +  1);
    }

    return this.maxLength;
  }
}


const substring = new UniqueLongestSubstring("abcabcbb");
const len = substring.findLongestSubstring("abcabcbb"); // Output: 3
console.log(len);
