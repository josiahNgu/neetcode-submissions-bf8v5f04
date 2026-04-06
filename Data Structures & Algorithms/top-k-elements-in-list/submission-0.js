class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        const solution = [];
        for(let i = 0; i < nums.length; i++){
            map[nums[i]] = (map[nums[i]] || 0) + 1;
        }
        const sortableArray = Object.entries(map);
        sortableArray.sort((a,b) => {
            return b[1] - a[1];
        })
        for(let i = 0; i < k; i++){
        solution.push(sortableArray[i][0]);
        }
        return solution;
    }
}
