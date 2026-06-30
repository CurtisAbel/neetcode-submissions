class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        const uniqueElements = Array.from(new Set(nums)).sort((a, b) => a - b);
        for(let i =0; i<=uniqueElements.length; i++){
            nums[i]=uniqueElements[i]
        }
        return uniqueElements.length;
    }
}
