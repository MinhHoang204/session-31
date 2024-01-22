function fakeFilter(arr, callback){
    const result = [];
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i], i, arr)){
            result.push(arr[i]);
        }
    }
    return result;
}

// Su dung ham
const number = [1,2,3,4,5];
const filteredNumbers = fakeFilter(number, (element) => elememt > 3);
console.log(filteredNumbers);