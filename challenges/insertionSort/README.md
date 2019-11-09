## Challenge 26: Insertion Sort
Insertion Sort

### Challenge
Complete a working, tested implementation of Insertion Sort, based on the pseudo code provided

### Approach & Efficiency
InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp


### Solution
![Image](../../assets/CC26.jpg)
