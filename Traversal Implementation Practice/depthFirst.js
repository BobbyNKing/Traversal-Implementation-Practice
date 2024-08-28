////FOR A TREE//////
class TreeNode {
    constructor(value, children = []) {
        this.value = value;
        this.children = children;
    }
}

function depthFirstSearchTree(root) {
    if (!root) return;

    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        console.log(node.value); // Print the node's value

        // Add children to the stack in reverse order to maintain left-to-right order
        for (let i = node.children.length - 1; i >= 0; i--) {
            stack.push(node.children[i]);
        }
    }
}

// Testing
const tree = new TreeNode(1, [
    new TreeNode(2, [
        new TreeNode(5),
        new TreeNode(6)
    ]),
    new TreeNode(3, [
        new TreeNode(7),
        new TreeNode(8)
    ]),
    new TreeNode(4)
]);

depthFirstSearchTree(tree);
// 1, 2, 5, 6, 3, 7, 8, 4

/////FOR A GRAPH//////

class GraphNode {
    constructor(value) {
        this.value = value;
        this.neighbors = [];
    }
}

function depthFirstSearchGraph(startNode) {
    const stack = [startNode];
    const visited = new Set();

    while (stack.length > 0) {
        const node = stack.pop();

        // If node has not been visited
        if (!visited.has(node)) {
            console.log(node.value); // Print the node's value
            visited.add(node);

            // Add all unvisited neighbors to the stack
            for (const neighbor of node.neighbors) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
}

//Testing
const a = new GraphNode('A');
const b = new GraphNode('B');
const c = new GraphNode('C');
const d = new GraphNode('D');
const e = new GraphNode('E');

a.neighbors.push(b, c);
b.neighbors.push(a, d, e);
c.neighbors.push(a);
d.neighbors.push(b);
e.neighbors.push(b);

depthFirstSearchGraph(a);
// A, C, B, E, D