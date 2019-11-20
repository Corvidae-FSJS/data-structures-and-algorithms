## Challenge 36: breadth First Graph Implementation
Implement a breadth-first traversal on a graph.

### Challenge
- Extend your graph object with a breadth-first traversal method that accepts a starting node. Without utilizing any of the built-in methods available to your language, return a collection of nodes in the order they were visited. Display the collection.


### Approach & Efficiency
Visit the adjacent unvisited vertex. Mark it as visited. Display it. Insert it in a queue.
If no adjacent vertex is found, remove the first vertex from the queue.
Repeat Rule 1 and Rule 2 until the queue is empty.


### Solution
![Image](../../assets/CC36.jpg)