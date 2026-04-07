class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        // get the shortest length? OR do i even need it 
        let index = 0;
        let sol = "";
        if(strs.length === 0) return ""
        if(strs.length === 1) return strs[0];
        let length = strs[0].length;
        for(let i = 0; i < length; i++){
            for(let j = 0; j < strs.length; j++){
                if(!strs[j][i]) return sol;
                if( j > 0 && strs[j][i] !== strs[j - 1][i]) return sol;
                if(j === strs.length - 1) sol += strs[j][i];
            }
        }
        return sol;
    }
}
