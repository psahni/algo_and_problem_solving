// An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:
//
// A[P] + A[Q] > A[R],
// A[Q] + A[R] > A[P],
// A[R] + A[P] > A[Q].
// For example, consider array A such that:
//
//   A[0] = 10    A[1] = 2    A[2] = 5
//   A[3] = 1     A[4] = 8    A[5] = 20
// Triplet (0, 2, 4) is triangular.
//
// Write a function:
//
// class Solution { public int solution(int[] A); }
//
// that, given an array A consisting of N integers, returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.
//
// For example, given array A such that:
//
//   A[0] = 10    A[1] = 2    A[2] = 5
//   A[3] = 1     A[4] = 8    A[5] = 20
// the function should return 1, as explained above. Given array A such that:
//
//   A[0] = 10    A[1] = 50    A[2] = 5
//   A[3] = 1
// the function should return 0.

// My solution in Java with 100/100 and time complexity of O(N*log(N))

// With comments explaining the logic

// you can also use imports, for example:
// import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");
import java.util.Arrays;

class Solution {

    public int solution(int[] A) {

    int N = A.length;
    if (N < 3) return 0;
    Arrays.sort(A);

    for (int i = 0; i < N - 2; i++) {

        /**
         * Since the array is sorted A[i + 2] is always greater or equal to previous values
         * So A[i + 2] + A[i] > A[i + 1] ALWAYS
         * As well ass A[i + 2] + A[i + 1] > A[i] ALWAYS
         * Therefore no need to check those. We only need to check if A[i] + A[i + 1] > A[i + 2]?
         * Since in case of A[i] + A[i + 1] > MAXINT the code would strike an overflow (ie the result will be greater than allowed integer limit)
         * We'll modify the formula to an equivalent A[i] > A[i + 2] - A[i + 1]
         * And inspect it there
         */
        if (A[i] >= 0 && A[i] > A[i + 2] - A[i + 1]) {

            return 1;
        }
    }

    return 0;
}
