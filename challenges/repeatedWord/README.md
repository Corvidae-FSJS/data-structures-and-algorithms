## Challenge 31: Repeated Word
Repeated Word

### Challenge
Write a function that accepts a lengthy string parameter.
Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.


### Approach & Efficiency
First remove punctuation
Next split each word
Loop through the array of words, setting each new word as a key with a value count of 1
once the loop gets to a word that is already present in the array return that word


### Solution
![Image](../../assets/CC31.jpg)