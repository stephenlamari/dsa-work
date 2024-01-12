// Function for LeetCode problem
function leetCodeProblem(root, k) {
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
   * @param {number} k
   * @return {number}
   */
  var kthSmallest = function (root, k) {
    var counter = 0;

    function traverse(node) {
      if (node == null) {
        return;
      }
      traverse(node.left);

      counter++;
      if (counter === k) {
        return node.val;
      }

      traverse(node.right);
    }

    return traverse(root);
  };

  return kthSmallest(root, k);
}

// Test cases
const testCases = [
  {
    input: {
      val: 3,
      left: {
        val: 1,
        right: {
          val: 2,
          left: null,
          right: null,
        },
        left: null,
      },
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
    k: 1,
    expected: 1, // replace with the expected output
  },
  {
    input: {
      val: 5,
      left: {
        val: 3,
        left: {
          val: 2,
          left: {
            val: 1,
            left: null,
            right: null,
          },
          right: null,
        },
        right: {
          val: 4,
          left: null,
          right: null,
        },
      },
      right: {
        val: 6,
        left: null,
        right: null,
      },
    },
    k: 3,
    expected: 3, // replace with the expected output
  },
];

// Run test cases
testCases.forEach((test, index) => {
  const result = leetCodeProblem(test.input, test.k);
  console.log(
    `Test case ${index + 1}: ${
      JSON.stringify(result) === JSON.stringify(test.expected) ? "PASS" : "FAIL"
    }`
  );
  console.log(`Expected: ${test.expected}, Got: ${result}`);
});
