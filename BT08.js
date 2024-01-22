function fakeReduce(arr, callback, initialValue){
    let accumulator = initialValue;
    let startIndex = initialValue;
    for (let i = startIndex; i < arr.length; i++){
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

// Su dung ham
const number = [1,2,3,4,5];
const sum = fakeReduce(number, (accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);