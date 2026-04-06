class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // easiest way is to just sort and compare each letter
        // non sort answer is to just do a hashmap to keep track, at the end, the map has to be empty
        if(s.length !== t.length) return false;
        const map = {};
        for(let i = 0; i < s.length; i++){
            const char = s[i];
            map[char] = (map[char] || 0) + 1;
        }
        for(let i = 0; i < t.length; i++){
            const char = t[i];
            if(!map[char]) return false;
            map[char] = map[char] - 1;
            if(map[char] === 0) delete map[char]
        }
        return Object.entries(map).length === 0;
    }
}
