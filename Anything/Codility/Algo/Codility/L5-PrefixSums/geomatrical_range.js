function solution (S, P, Q) {
	var dna = '';
	var ans = [];

	for (var i=0; i < P.length; i++) {
		dna = S.slice(P[i], Q[i] + 1);
		console.log(dna);
		if (dna.indexOf('A') !== -1) {
			ans.push(1)
		} else if (dna.indexOf('C') !== -1) {
			ans.push(2)
		} else if (dna.indexOf('G') !== -1) {
			ans.push(3)
		} else {
			ans.push(4)
		}
	}

	return ans;
}



const ans = solution("CAGCCTA", [2, 5, 0], [4, 5, 6])
console.log(ans);
