/**
 * A string S consisting of N characters is called properly nested if:
 * S is empty;
 * S has the form "(U)" where U is a properly nested string;
 * S has the form "VW" where V and W are properly nested strings.
 * For example, string "(()(())())" is properly nested but string "())" isn't.
 * Write a function:
 * class Solution { public int solution(String S); }
 * that, given a string S consisting of N characters, returns 1 if string S is properly nested and 0 otherwise.
 * For example, given S = "(()(())())", the function should return 1 and given S = "())", the function should return 0, as explained above.
 * Assume that:
 * N is an integer within the range [0..1,000,000];
 * string S consists only of the characters "(" and/or ")".
 * Complexity:
 * expected worst-case time complexity is O(N);
 * expected worst-case space complexity is O(1) (not counting the storage required for input arguments).
 */
import java.util.Stack;
class Solution {
    public int solution(String S) {
        Stack<Character> stack = new Stack<Character>();
        for (int i = 0; i < S.length(); i++) {
            switch (S.charAt(i)) {
                case '(':
                    stack.push(S.charAt(i));
                    break;
                case ')':
                    if (stack.isEmpty() || stack.peek() != '(') return 0;
                    else stack.pop();
                    break;
            }
        }
        return stack.isEmpty() ? 1 : 0;
    }
}
/*Score: 100%*/



// JS solution
// function solution(S) {
//     // write your code in JavaScript (Node.js 8.9.4)
//
//      var sum = 0;
//
//     for (let i = 0; i < S.length; i++) {
//
//         // console.log(A[i]);
//         if (S[i] =='(') {
//             sum ++;
//         } else {
//             sum --;
//         }
//
//         if (sum < 0) {
//             return 0;
//         }
//     }
//
//     if (sum === 0) {
//         return 1;
//     } else {
//         return 0;
//     }
// }
