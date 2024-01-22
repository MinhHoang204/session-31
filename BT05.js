function chunkArrayInGroups(arr, n){
    const result = [];
    let i = 0;

    while (i < arr.length) {
        result.push(arr.slice(i, i + n));
        i += n;
    }
    return result;
}

// Su dung ham
console.log(chunkArrayInGroups([1,2,3,4,5,6,7], 3));
// Output: [[1,2,3], [4,5,6], [7]]