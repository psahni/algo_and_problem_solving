function solution(A) {
    let sorted = A.sort((a, b) => a-b);
    let max1 = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
    let max2 = A[0] * A[1] * A[A.length - 1];

    return Math.max(max1, max2);
}
