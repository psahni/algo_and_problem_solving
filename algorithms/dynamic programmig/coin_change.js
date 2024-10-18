const arr = new Array(7);

for (let i=0; i < arr.length; i++) {
    arr[i] = 0;
}

const coins = [3, 5, 6];
const target = 6;

const max = Number.POSITIVE_INFINITY;

for (let i=1; i < arr.length; i++) {
    const amount = i;
    let min = max;
    for (let coin of coins) {
        if (coin > amount) {
            continue;
        }
        
        const remaining = amount - coin;
        
        if (arr[remaining] == -1) {
            continue;
        }
        
        min = Math.min(arr[remaining], min);
    }
    
    if (min == max) {
        arr[i] = -1;
    } else {
        arr[i] = min + 1;
    }
}

console.log(arr[6]);

// Hint: Array Index from 1, become the amount. You keep the taking diff with each coin