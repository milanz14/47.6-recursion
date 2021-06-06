// write a function that finds the product of an array of numbers recursively
const product = (arr) => {
    if (arr.length === 0) {
        return 1;
    };
    return arr[0] * product(arr.slice(1));
}

console.log(product([1,2,3,4,5])); // 120


// Given a list of words, return the length of the longest word

const longest = (arr) => {

}

// write a function that returns a string of every other character
const everOther = (str, idx=0) => {
    if (idx >= str.length) {
        return ''
    }
    return str[idx] + everyOther(str, idx+2);
}

// check whether a string is a palindrome or not
const isPalindrome = (str) => {
    let string = str.replace(/[^a-z0-9]/i, '').toLowerCase()
    const len = string.length;

    if (len <= 1) return true;
    if (string[0] !== string[len-1]) return false;
    return isPalindrome(string.slice(1,-1))
}

