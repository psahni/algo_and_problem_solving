function solution(K, M, A) {
  // M is a red herring
  return minimalLargeSumBinarySearch(K, A);
}

function minimalLargeSumBinarySearch(maxNumBlocks, arra) {
  var lowerBoundLargeSum = Math.max.apply(null, arra);
  var upperBoundLargeSum = arra.reduce((a,c)=>a+c,0);
  var result = -1;

  while (lowerBoundLargeSum <= upperBoundLargeSum) {
    var tentativeLargeSum = Math.floor((lowerBoundLargeSum+upperBoundLargeSum)/2);
    if (tentativeLargeSumIsPossible(arra, maxNumBlocks, tentativeLargeSum)) {
      result = tentativeLargeSum; // OK, but...// possible result
      // try a smaller one
      upperBoundLargeSum = tentativeLargeSum - 1;
    } else {
      // try a larger one
      lowerBoundLargeSum = tentativeLargeSum + 1;
    }
  }
  return result;
}

function tentativeLargeSumIsPossible(arra, maxNumBlocks, tentativeLargeSum) {
  var curBlockSum = 0;
  var numBlocks = 1; // at least...

  for (let elem of arra) {
    if (curBlockSum + elem <= tentativeLargeSum) {
      // make curBlock bigger
      curBlockSum += elem;
    } else {
      // start a new block containing element
      numBlocks++;
      curBlockSum = elem;
    }
    if (numBlocks > maxNumBlocks) return false;
  }
  return true;
}




// def blockSizeIsValid(A, max_block_cnt, max_block_size):
//     block_sum = 0
//     block_cnt = 0
//
//     for element in A:
//         if block_sum + element > max_block_size:
//             block_sum = element
//             block_cnt += 1
//         else:
//             block_sum += element
//         if block_cnt >= max_block_cnt:
//             return False
//
//     return True
//
// def binarySearch(A, max_block_cnt, using_M_will_give_you_wrong_results):
//     lower_bound = max(A)
//     upper_bound = sum(A)
//
//     if max_block_cnt == 1:      return upper_bound
//     if max_block_cnt >= len(A): return lower_bound
//
//     while lower_bound <= upper_bound:
//         candidate_mid = (lower_bound + upper_bound) // 2
//         if blockSizeIsValid(A, max_block_cnt, candidate_mid):
//             upper_bound = candidate_mid - 1
//         else:
//             lower_bound = candidate_mid + 1
//
//     return lower_bound
//
// def solution(K, M, A):
//     return binarySearch(A,K,M)
