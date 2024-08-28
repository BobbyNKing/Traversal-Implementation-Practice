////TREE /////

class TreeNode {
    constructor(value, children = []) {
        this.value = value;
        this.children = children;
    }
}

function breadthFirstSearchTree(root) {
    if (!root) return;

    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift(); // Dequeue a node
        console.log(node.value); // Print the node's value

        // Enqueue all children of the node
        for (const child of node.children) {
            queue.push(child);
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

breadthFirstSearchTree(tree);
// 1, 2, 3, 4, 5, 6, 7, 8

//GRAPH//

class GraphNode {
    constructor(value) {
        this.value = value;
        this.neighbors = [];
    }
}

function breadthFirstSearchGraph(startNode) {
    if (!startNode) return;

    const queue = [startNode];
    const visited = new Set();

    while (queue.length > 0) {
        const node = queue.shift(); // Dequeue a node

        if (!visited.has(node)) {
            console.log(node.value); // Print the node's value
            visited.add(node);

            // Enqueue all unvisited neighbors
            for (const neighbor of node.neighbors) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
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

breadthFirstSearchGraph(a);
//A, B, C, D, E