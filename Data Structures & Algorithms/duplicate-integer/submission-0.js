class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
 hasDuplicate(nums) {
    const noDuplicates = new Set(nums);
        return Array.from(noDuplicates).length === nums.length ? false: true;
    }
}
