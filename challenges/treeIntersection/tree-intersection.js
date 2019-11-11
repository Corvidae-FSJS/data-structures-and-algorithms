const treeIntersection = (tree1, tree2) => {
  const tree1Arr = tree1.preOrder(tree1.root);
  const tree2Arr = tree2.preOrder(tree2.root);
  const resultsArr = [];

  tree1Arr.forEach(i => {
    tree2Arr.forEach(j => {
      if(i === j) {
        resultsArr.push(i);
      }
    });
  });
  return resultsArr.sort();
};

module.exports = treeIntersection;