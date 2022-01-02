import java.util.*;

class Solution {

    private int count = 0;
    private boolean[] memo;

    public int solution(int M, int[] A) {
        initMemo(M);
        int i=0;
        int j=0;

        while (i<A.length && j<A.length) {
            if (memo[A[j]]) {
                memo[A[i]] = false;
                i++;

            } else {
                memo[A[j]] = true;
                count += (j - i + 1);
                j++;
            }

            if (count > 1000000000) {
                return 1000000000;
            }
        }

        return count;
    }

    private void initMemo(int M) {
        memo = new boolean[M + 1];
    }
}
