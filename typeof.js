function checkType (a) {
    return typeof(a);
}

const arr = [4, true, "hello", {}, undefined]

for (let i in arr){  
console.log (checkType(arr [i]))
}
