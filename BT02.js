function findLargestNumber(arrays) {
    const result = [];
    for (const array of arrays) {
        if (array.isArray(array) && array.length > 0){
            const max = Math.max(array);
            result.push(max);
        }
    }
    return result;
}  

// Su dung ham
const result = findLargestNumber([1,2,3], [4,5,6], [7,8,9]);
console.log(result);