class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
         const ans = new Array(nums.length);
    
         for(let i = 0; i<nums.length; i++){
            ans[i] = nums[i];
         }

         const result = ans.concat(nums);
         return result;
    }
}
