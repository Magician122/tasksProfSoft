
let arr = [11, 5, 19, 0, 7, 88, 1, 3, 6, 8, 6, 0];
arr.sort( (a, b) => a - b );
console.log (arr);

arr.sort( (a, b) => b - a);
console.log (arr);

console.log (Math.max(...arr));

console.log (Math.min(...arr));

function unique(array) {
    let out = [];
  
    for (let i in array) {
      if (!out.includes(array[i])) {
        out.push(array[i]);
      }
    }
  
    return out;
}


console.log(unique(arr).sort((a, b) => a - b));
