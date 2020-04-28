function arrayToNodes(nodes, parent = document.querySelector('html')) {
  var newParent = document.createElement(nodes[0]);
  parent.appendChild(newParent);

  nodes[1].forEach(function (elementArray) {
    arrayToNodes(elementArray, newParent);
  });
}