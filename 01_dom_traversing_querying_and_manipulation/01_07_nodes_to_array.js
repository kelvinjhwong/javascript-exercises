function nodesToArr() {
  return (function nodeToArr(node) {
    var childElements = Array.prototype.slice.call(node.children);

    if (childElements.length === 0) {
      return [node.tagName, []];
    } else {
      return [
        node.tagName,
        childElements.map((childElement) => nodeToArr(childElement)),
      ];
    }
  }(document.body));
}
