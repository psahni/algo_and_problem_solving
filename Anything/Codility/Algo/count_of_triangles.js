function solution(A) {
    var n = A.length;

    A.sort();

    var count = 0;

    for (i = n - 1; i >= 1; i--) {
        var l = 0, r = i - 1;
        while (l < r) {
            if (A[l] + A[r] > A[i]) {

                // If it is possible with a[l], a[r]
                // and a[i] then it is also possible
                // with a[l+1]..a[r-1], a[r] and a[i]
                count += r - l;

                // checking for more possible solutions
                r--;
            } else // if not possible check for
            // higher values of arr[l]
            {
                l++;
            }
        }
    }
    console.log("No of possible solutions: " + count);
}

var A = [ 4, 3, 5, 7, 6 ];
solution(A);