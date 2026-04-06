/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const recursion = (tree1,tree2) => {
            if(!tree1 && !tree2) return true;
            if(!tree1 || !tree2) return false;
            const val1 = tree1.val;
            const val2 = tree2.val;
            if(val1 !== val2 ) return false;
            return recursion(tree1.left,tree2.left) &&
           recursion(tree1.right,tree2.right);
        }
       return recursion(p,q);
    }
}
