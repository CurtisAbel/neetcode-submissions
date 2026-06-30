class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const word = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split(' ').join('');
        const reverse = word.split('').reverse().join('');
        const palindrome = word === reverse ? true:false;

        console.log(reverse, word);
        return palindrome;

    }
}
