// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Function for LeetCode problem
function leetCodeProblem() {
  /**
   * Definition for a binary tree node.
   * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.left = (left===undefined ? null : left)
   *     this.right = (right===undefined ? null : right)
   * }
   */

  /**
   * @param {number[]} preorder
   * @param {number[]} inorder
   * @return {TreeNode}
   */
  var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;

    let root = new TreeNode(preorder[0]);
    let mid = inorder.indexOf(preorder[0]);

    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

    return root;
  };

  return buildTree;
}

// Test cases
const testCases = [
  {
    input: { preorder: [3, 9, 20, 15, 7], inorder: [9, 3, 15, 20, 7] },
    expected: "[3,9,20,null,null,15,7]",
  },
  {
    input: { preorder: [-1], inorder: [-1] },
    expected: "[-1]",
  },
];

// Run test cases
testCases.forEach((test, index) => {
  const buildTree = leetCodeProblem();
  const result = buildTree(test.input.preorder, test.input.inorder);
  const resultString = JSON.stringify(serializeTree(result));
  console.log(
    `Test case ${index + 1}: ${
      resultString === test.expected ? "PASS" : "FAIL"
    }`
  );
  console.log(`Expected: ${test.expected}, Got: ${resultString}`);
});

// Helper function to serialize the tree into string format
function serializeTree(root) {
  if (!root) return null;
  let result = [];
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push(null);
    }
  }
  // Trim the trailing nulls
  while (result[result.length - 1] === null) {
    result.pop();
  }
  return result;
}
