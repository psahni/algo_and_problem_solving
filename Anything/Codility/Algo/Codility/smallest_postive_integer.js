function solution(A) {
    // only positive values, sorted
    A = A.filter(x => x >= 1).sort((a, b) => a - b)

    let x = 1

    for(let i = 0; i < A.length; i++) {
        // if we find a smaller number no need to continue, cause the array is sorted
        if(x < A[i]) {
            return x
        }
        x = A[i] + 1
    }

    return x;
}



let ans = solution([-1, -3]);
console.log('[-1, -3] smallest_positive_integer = ', ans);

ans = solution([1, 3, 5, 7, 1, 2]);
console.log('[1, 3, 5, 7, 1, 2] smallest_positive_integer = ', ans);

ans = solution([1, 2, 3]);
console.log('[1, 2, 5] smallest_positive_integer = ', ans);

ans = solution([100, 150, 200]);
console.log('[100, 150, 200] smallest_positive_integer = ', ans);
