// Definition for a binary tree node.
function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// Function for AlgoExpert problem
function algoExpertProblem() {
  /**
   * @param {TreeNode} root
   * @param {number} targetValue
   * @return {number}
   */
  function findClosestValueInBst(root, targetValue) {
    let closestValueToTarget = root.value;
    let minDifferenceToTarget = Math.abs(root.value - targetValue);

    function treeTraversal(
      currentNode,
      closestValueToTarget,
      minDifferenceToTarget
    ) {
      if (currentNode === null) {
        return closestValueToTarget;
      }

      let currentDifferenceToTarget = Math.abs(currentNode.value - targetValue);

      if (currentDifferenceToTarget < minDifferenceToTarget) {
        minDifferenceToTarget = currentDifferenceToTarget;
        closestValueToTarget = currentNode.value;
      }

      if (currentNode.value > targetValue) {
        return treeTraversal(
          currentNode.left,
          closestValueToTarget,
          minDifferenceToTarget
        );
      } else if (currentNode.value < targetValue) {
        return treeTraversal(
          currentNode.right,
          closestValueToTarget,
          minDifferenceToTarget
        );
      } else {
        return closestValueToTarget;
      }
    }

    return treeTraversal(root, closestValueToTarget, minDifferenceToTarget);
  }

  return findClosestValueInBst;
}

// Helper function to build the tree from nodes array
function buildTree(nodes) {
  let nodeMap = new Map();
  nodes.forEach((node) => {
    nodeMap.set(node.id, new TreeNode(node.value));
  });

  nodes.forEach((node) => {
    if (node.left) nodeMap.get(node.id).left = nodeMap.get(node.left);
    if (node.right) nodeMap.get(node.id).right = nodeMap.get(node.right);
  });

  return nodeMap.get(nodes[0].id); // Assuming the first node is the root
}

// Test cases
const testCases = [
  {
    root: buildTree([
      { id: "10", left: "5", right: "15", value: 10 },
      { id: "15", left: "13", right: "22", value: 15 },
      { id: "22", left: null, right: null, value: 22 },
      { id: "13", left: null, right: "14", value: 13 },
      { id: "14", left: null, right: null, value: 14 },
      { id: "5", left: "2", right: "5-2", value: 5 },
      { id: "5-2", left: null, right: null, value: 5 },
      { id: "2", left: "1", right: null, value: 2 },
      { id: "1", left: null, right: null, value: 1 },
    ]),
    targetValue: 12,
    expected: 13,
  },
];

// Run test cases
testCases.forEach((test, index) => {
  const findClosestValueInBst = algoExpertProblem();
  const result = findClosestValueInBst(test.root, test.targetValue);
  console.log(
    `Test case ${index + 1}: ${result === test.expected ? "PASS" : "FAIL"}`
  );
  console.log(`Expected: ${test.expected}, Got: ${result}`);
});
