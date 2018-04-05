class Node {
  constructor(args = []) {
    this.data = [...args];
    this.completeWord = false;
    this.children = {};
  }
}

module.exports = Node;