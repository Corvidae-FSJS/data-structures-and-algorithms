## Challenge 32: Tree Intersection
Find common values in 2 binary trees.

### Challenge
- Write a function called tree_intersection that takes two binary tree parameters.

- Without utilizing any of the built-in library methods available to your language, return a set of values found in both trees.


### Approach & Efficiency
Create an empty resultsArray.
Use the preOrder BinaryTree method from the tree.js to traverse the trees
Loop through both arrays comparing values and push shared values into resultsArray
Return resultsArray at the end


### Solution
![Image](../../assets/CC32.jpg)