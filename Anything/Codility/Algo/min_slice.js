function solution(A) {
  min_avg = (A[0] + A[1])/2;
  min_pos = 0;


  for(i = 0; i < A.length - 2; i++) {
    let val = (A[i] + A[i+1])/2;

    if (val < min_avg) {
      min_avg = val;
      min_pos = i;
    }

    val = (A[i] + A[i+1] + A[i+2])/3;

    if (val < min_avg) {
      min_avg = val;
      min_pos = i;
    }
  }

  return pos;
}
