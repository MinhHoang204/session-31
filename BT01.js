let longestWord = "";
if (word.length > maxLength){
    longestWord = word;
    maxLength = word.length;
    return [longestWord, maxLength];
}

const findLongestWord = (str);
if (!str){
    return "";
}

const words = str.split("");
let maxLength = 0;
for (let word of words){
    if (word.length > maxLength){
        maxLength = word.length;
    }
}

const longWord = [];
for (let word of words){
    if (word.length === maxLength){
        longWord.push(word);
    }
}
console.log(longestWords[0] + `($max{length})`);
