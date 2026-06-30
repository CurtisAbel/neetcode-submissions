class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
         if (s.length !== t.length) {
            return false;
        }
       const result1 = s.split('').sort().join('');
        const result2 = t.split('').sort().join('');

        return result1 === result2;
    }
}
