/*
// O(n)
const findShortestSubArray = (nums) => {
    const hash_map = {}
    const firstIndexes = {}
    const lastIndexes = {}
    let degree = 0
    for (let i = 0; i < nums.length; i++) {
        const k = nums[i]
        hash_map[k] = (counts[k] || 0) + 1
        degree = Math.max(max, hash_map[k])
        if (firstIndexes[k] === undefined) {
            firstIndexes[k] = i
        }
        lastIndexes[k] = i
    }
    let res = nums.length
    for (const k in hash_map) {
        if (counts[k] === degree)
            res = Math.min(res, lastIndexes[k] - firstIndexes[k] + 1)
        }
    }
    return res
};

*/

/*
// O(1)

const findShortestSubArray = function(nums) {
    let num_counts = new Map();
    let degree = 0;
    let first_seen = new Map();
    let min_length = 0;

    for (let i= 0; i<= nums.length; i++) {
      if(!first_seen.has(nums[i])){
         first_seen.set(nums[i], i);
      }

     num_counts.set(nums[i], (num_counts.has(nums[i]) ? num_counts.get(nums[i]) : 0) + 1)

     if (num_counts.get(nums[i]) > degree) {
       degree = num_counts.get(nums[i]);
       min_length = i - first_seen.get(nums[i]) + 1;
     } else if (num_counts.get(nums[i]) === degree) {
        min_length = Math.min(min_length, i - first_seen.get(nums[i])+ 1);
      }
    }
    return min_length;
};

*/