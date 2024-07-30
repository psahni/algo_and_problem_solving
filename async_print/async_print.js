var a = [1, 2, 3, 4, 5];

function print(index) {
  console.log(a[index])
}

let j = 0;
for (let i = 4; i >=0 ; i--) {
    (function(index, j) {
        setTimeout(() => { print(index) },  j* 1000);
    })(i, j);
    j += 1
}