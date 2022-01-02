function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let part1 = A[0];
    let part2 = A.reduce((a, b) => a + b, 0);
    part2 = part2 - A[0];

    let diff = Math.abs(part2 - part1);

    for (i = 1; i < A.length - 1; i++) {
        part1 = part1 + A[i];
        part2 = part2 - A[i];

        if (Math.abs(part1 - part2) < diff ) {
            diff = Math.abs(part1 - part2);
        }
    }
    return diff;
}

const ans = solution([-2, -3, -4, -1]); // 0
console.log(ans)

const ans2 = solution([3,1,2,4,3]); // 1
console.log(ans2)

const ans3 = solution([-1000, 1000]); // 1
console.log(ans3)
