class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     * area : u can only choose the shortest out of the 2 ; area is h * w ; so we can use 2 ponter to move away from shorter h
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let max = 0;
        while(left < right){
            const leftNum = heights[left];
            const rightNum = heights[right];
            const area = Math.min(leftNum,rightNum) * (right - left);
            max = Math.max(max,area);
            if(leftNum < rightNum) left++;
            else right--;            
        }
        return max;
    }
}
