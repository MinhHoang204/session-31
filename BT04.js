function truncate(str, n) {
    if (str.length > n){
        return str.slice(0, n) + "...";
    }
    return str;
}

// Su dung ham
console.log(truncate("Hello, world"), 5); // Output: Hello...
console.log(truncate("Hello, world"), 20); // Output: Hello, world!