class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isValid(ch){
        const c = ch.toLowerCase();
       return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
    }
    isPalindrome(s) {
        let left = 0; 
        let right = s.length - 1;
        while(left < right){
            while(left < right && !this.isValid(s[left])){
                left++;
            }
            while( right > left && !this.isValid(s[right])){
                right--;
            }
            if(left < right){
            if(s[left].toLowerCase() !== s[right].toLowerCase()) return false;
            left++;
            right--;
            }
        }
        return true;
    }
    
}
