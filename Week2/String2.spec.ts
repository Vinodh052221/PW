import { test } from '@playwright/test';

// Example 1
function lengthOfLastWord1(str) {
    // 1. Split the string into an array of words
    const words = str.split(" ");

    // 2. Find the last word in the array
    const lastWord = words[words.length - 1];

    // 3. Calculate the length of this word
    return lastWord.length;
}

console.log(lengthOfLastWord1("Hello World")); // Output: 5


// Example 2
function lengthOfLastWord2(str) {
    // 1. Trim the String
    const trimmedString = str.trim();

    // 2. Split the String into Words
    const words = trimmedString.split(/\s+/);

    // 3. Identify the Last Word
    const lastWord = words[words.length - 1];

    // 4. Calculate the Length of the Last Word
    const length = lastWord.length;

    // 5. Return the length
    return length;
}

console.log(lengthOfLastWord2(" fly me to the moon ")); // Output: 4


// Example 3
function isAnagram(str1, str2) {
    // 1. Remove spaces and convert all letters to the same case
    const formattedStr1 = str1.replace(/\s/g, "").toLowerCase();
    const formattedStr2 = str2.replace(/\s/g, "").toLowerCase();

    // 2. Sort the Characters
    const sortedStr1 = formattedStr1.split("").sort().join("");
    const sortedStr2 = formattedStr2.split("").sort().join("");

    // 3. Compare Sorted Strings
    const result = sortedStr1 === sortedStr2;

    // 4. Return the Result
    return result;
}

console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world"));   // Output: false