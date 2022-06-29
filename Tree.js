class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.left.left = new Node(5);

root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.left.left = new Node(5);

// 1. Height of Binary Tree

// let max = (node) => {
//   if (node == null) return 0;
//   return max(node.left) > max(node.right)
//     ? max(node.left) + 1
//     : max(node.right) + 1;
// };

// console.log(max(root));

//2. determine if two trees are identical

// const determine = (node1, node2) => {
//   if (node1 == null || node2 == null) return node1 == node2;
//   return (
//     node1.data == node2.data &&
//     determine(node1.left, node2.left) &&
//     determine(node1.right, node2.right)
//   );
// };

// console.log(determine(root, root1));

//3. mirror tree

// const mirror = (node) => {
//    if(node === null) return;
//    let temp = node.left;
//    node.left = node.right;
//    node.right = temp;
//    mirror(node.left);
//    mirror(node.right);
//    return node;
// }

// console.log(mirror(root));
