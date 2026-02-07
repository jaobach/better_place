const chai = require("chai");
chai.config.truncateThreshold = 0;
const deepEqual = chai.assert.deepEqual;

class Node { 
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left  = left;
    this.right = right;
  }
}

function stringifyTree (tree) {
	if (tree === null)
		return 'null';

	let string = '';

	function printNode (node = tree, depth = 0) {
		if (node === null)
			return;
		string += '----'.repeat(depth) + node.value + '\n';
		printNode(node.left,  depth + 1);
		printNode(node.right, depth + 1);
	}
	printNode();
	return string;
}

		const treeTwo =
		new Node(1,
			new Node(8,
				new Node(10),
				new Node(3)
			),
			new Node(4,
				null,
				new Node(5,
					null,
					new Node(7)
				)
			)
		);


console.log(stringifyTree(treeTwo))