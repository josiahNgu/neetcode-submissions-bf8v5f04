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
//  swap the left right of the node 
//  feel like can do with some queue with math
//  read node, insert right then insert left, put also push its children

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root) return root;
        const queue = [root];
        while(queue.length > 0){
            const curr = queue.shift();
            const tmp = curr.left;
            curr.left = curr.right;
            curr.right = tmp;
            if(curr.right) queue.push(curr.right);
            if(curr.left) queue.push(curr.left);
        }
        return root;
    }
}
