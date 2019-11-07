## Challenge 3: Binary Search on an Array
<!-- Short summary or background information -->

### Challenge
<!-- Description of the challenge -->
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

### Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Use a while loop to cut the array in half, search each half to see if the num in question is =, >, or < the middle value, start next search at + or - 1 from middle number, divide in half again and repeat. Continue to do so until leaving the while loop eithe rby finding the number or by not finding the number, return -1/.


### Solution
![Image](../../assets/CC03.jpg)
