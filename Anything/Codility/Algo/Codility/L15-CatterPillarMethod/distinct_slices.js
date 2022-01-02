// An integer M and a non-empty array A consisting of N non-negative integers are given. All integers in array A are less than or equal to M.
//
// A pair of integers (P, Q), such that 0 ≤ P ≤ Q < N, is called a slice of array A. The slice consists of the elements A[P], A[P + 1], ..., A[Q]. A distinct slice is a slice consisting of only unique numbers. That is, no individual number occurs more than once in the slice.
//
// For example, consider integer M = 6 and array A such that:
//
//     A[0] = 3
//     A[1] = 4
//     A[2] = 5
//     A[3] = 5
//     A[4] = 2
// There are exactly nine distinct slices: (0, 0), (0, 1), (0, 2), (1, 1), (1, 2), (2, 2), (3, 3), (3, 4) and (4, 4).
//
// The goal is to calculate the number of distinct slices.
//
// Write a function:
//
// class Solution { public int solution(int M, int[] A); }
//
// that, given an integer M and a non-empty array A consisting of N integers, returns the number of distinct slices.
//
// If the number of distinct slices is greater than 1,000,000,000, the function should return 1,000,000,000.
//
// For example, given integer M = 6 and array A such that:
//
//     A[0] = 3
//     A[1] = 4
//     A[2] = 5
//     A[3] = 5
//     A[4] = 2
// the function should return 9, as explained above.

function Solution(A) {
    let count = 0;
    let memo = {};
    let left = right = 0;


    while( left < A.length && right < A.length ) {
        // console.log('------------------');
        if (memo[A[right]]) {
            console.log('Found = ', A[right])
            memo[A[left]] = false;
            left++;
        } else { // false

            memo[A[right]] = true;
            // console.log('v = ', v)
            // console.log('right = ', right, ' left', left);
            // console.log('(', A[left], A[right], ')');
            count = count + (right - left + 1)
            right++;
        }

        if (count > 1000000000) {
            return 1000000000;
        }
        console.log(memo)
    }

    return count;
}

// console.log(Solution([3,4 ,5, 5,2]));
console.log(Solution([3, 1, 2, 3]));
