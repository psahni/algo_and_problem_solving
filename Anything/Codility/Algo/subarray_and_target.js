// function findSubArrays(array, target) {
//     let map = { 0 : [-1] };
//
//     let sum = 0;
//
//     for (i=0; i < array.length; i++) {
//         sum += array[i];
//             console.log('sum = ', sum);
//             console.log('sum - target = ', sum-target);
//         if (map[parseInt(sum - target)]) {
//             const list = map[parseInt(sum - target)];
//             //console.log('==> i ', i);
//             // console.log(map);
//             for (j = 0 ; j < list.length; j++) {
//                 console.log(array.slice(list[0] + 1, i+1))
//             }
//         }
//
//         if (!map[sum]) {
//             map[sum] = [];
//         }
//
//         //
//         // console.log(sum);
//         map[parseInt(sum)].push(parseInt(i));
//         console.log(map);
//     }
// }

// function findSubArrays(array, target) {
//     let sum = array[0];
//     start = 0;
//
//     for (i = 1; i < array.length; i++) {
//         // console.log('next = ', array[i], i)
//         while (sum > target && start < i-1) {
//             // console.log('ss', sum, target, start);
//             sum = sum - array[start];
//             start++;
//         }
//
//
//
//         if (sum == target) {
//             console.log('found at', start, i - 1, '=', array.slice(start, i));
//         }
//
//         sum += array[i];
//
//         // console.log('sum', sum);
//     }
// }

// findSubArrays([3, 4, -7, 1, 3, 3, 1, -4  ], 7);
// findSubArrays([1, 4, 9, 6, 7, 20], 13);




function findSubArrays(arr, sum) {
    //cur_sum to keep track of cummulative sum till that polet
    let cur_sum = 0;
    let start = 0;
    let end = -1;
    let hashMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        cur_sum = cur_sum + arr[i];
        //check whether cur_sum - sum = 0, if 0 it means
        //the sub array is starting from index 0- so stop
        if (cur_sum - sum == 0) {
            start = 0;
            end = i;
            break;
        }
        //if hashMap already has the value, means we already
        // have subarray with the sum - so stop
        if (hashMap.has(cur_sum - sum)) {
            start = hashMap.get(cur_sum - sum) + 1;
            end = i;
            break;
        }
        //if value is not present then add to hashmap
        hashMap.set(cur_sum, i);

    }
    // if end is -1 : means we have reached end without the sum
    if (end == -1) {
        console.log("No subarray with given sum exists");
    }
    else {
        console.log("Sum found between indexes "
                        + start + " to " + end);
    }

}

findSubArrays([1, 5, 6, 14, 17], 20);
