function fakeFind(arr, callback) {
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i], i, arr)){
            return arr[i];
        }
    }
    return undefined;
}

// Su dung ham
const number = [1,2,3,4,5];
const result = fakeFind(number, (element) => element > 3);
console.log(result);