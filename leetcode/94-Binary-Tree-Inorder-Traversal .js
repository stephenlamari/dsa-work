// Function for LeetCode problem
function leetCodeProblem(root) {
  /**
   * Definition for a binary tree node.
   * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.left = (left===undefined ? null : left)
   *     this.right = (right===undefined ? null : right)
   * }
   */
  /**
   * @param {TreeNode} root
   * @return {number[]}
   */

  var inorderTraversal = function (root) {
    var nodeTraversal = [];

    function traverse(node) {
      if (node == null) {
        return;
      }
      traverse(node.left);
      nodeTraversal.push(node.val);
      traverse(node.right);
    }

    traverse(root);
    return nodeTraversal;
  };

  return inorderTraversal(root);
}

// Test cases
const testCases = [
  {
    input: {
      val: 1,
      left: {
        val: 2,
        left: null,
        right: null,
      },
      right: {
        val: 3,
        left: null,
        right: null,
      },
    },
    expected: [2, 1, 3],
  },
  { input: null, expected: [] },
  {
    input: {
      val: 1,
      left: null,
      right: null,
    },
    expected: [1],
  },
];

// Run test cases
testCases.forEach((test, index) => {
  const result = leetCodeProblem(test.input);
  console.log(
    `Test case ${index + 1}: ${
      JSON.stringify(result) === JSON.stringify(test.expected) ? "PASS" : "FAIL"
    }`
  );
  console.log(`Expected: ${test.expected}, Got: ${result}`);
});
