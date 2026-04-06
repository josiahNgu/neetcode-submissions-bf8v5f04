class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // easiest way is to sort them and group them 
        // 26 length array, we count each string based on that , if they have the same then they are a group
        // need to keep track of each one 
        const solution = [];
        const map = {};
        for(let i = 0; i < strs.length; i++){
            const word = strs[i];
            const charSet = Array.from({length: 26}, (v,i)=>0);
            for(let j = 0; j < word.length; j++){
                const char = word[j];
                const index =  char.charCodeAt(0) - 'a'.charCodeAt(0);
                charSet[index]+= 1;
            }
            const stringRepresentation = charSet.join(",");
            if(!map[stringRepresentation]) map[stringRepresentation] = [i]
            else map[stringRepresentation].push(i);
        }
        console.log(map)

        for(const [_,value] of Object.entries(map)){
            const entry = []
            for(let i = 0; i < value.length; i++){
            entry.push(strs[value[i]]);
            }
            solution.push(entry)
        }
        return solution;
    }
}
