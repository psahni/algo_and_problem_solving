// https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
// Problem 88

function Merge(arr1, arr2) {
  
  let i = 2;
  let j = 2;
  let k = 5;

  while (i >=0 && j >=0){
    if (arr1[i] > arr2[j]) {
      console.log("replacing ", i, " ", j, " ", k);
      arr1[k] = arr1[i];
      console.log(arr1);
      k--;
      i--;
      console.log("replacing after", i, " ", j, " ", k);
    } else {
      console.log("inserting ", i, " ", j, " ", k);
      arr1[k] = arr2[j];
      console.log(arr1);
      k--;
      j--;
      console.log("inserting after", i, " ", j, " ", k);
    }
  }

  while(j >= 0) { // Left over elements
    arr1[k] = arr2[j];
    k--;
    j--;
  }

  return arr1;
}


const output = Merge([1,2,3,0,0,0], [2,5,6]);

console.log("Merged Array = ", output);
