import { test } from '@playwright/test';

test('String Reverse and Palindrome Check', async () => {
  function checkReversedPalindrome(str: string) {
    const reversed = str.split('').reverse().join('');
    const isPalindrome =
      reversed === reversed.split('').reverse().join('');

    console.log(`Original String: "${str}"`);
    console.log(`Reversed String: "${reversed}"`);
    console.log(`Is Reversed String a Palindrome? ${isPalindrome}`);
    console.log('-----------------------------');
  }

  checkReversedPalindrome('madam');
  checkReversedPalindrome('hello');
  checkReversedPalindrome('racecar');
  checkReversedPalindrome('javascript');
});