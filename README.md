# Questions and the Corresponding Algortihms

## Shortest path in DAG

- Easy: Consider a directed graph whose vertices are numbered from 1 to n. There is an edge from a vertex i to a vertex j
  if and only if either j = i + 1 or j = 3 \* i. The task is to find the minimum number of edges in a path in G from vertex 1 to vertex n. What is the answer if n = 9?
  - 2 (correct)
  - 1
  - 3
  - 4
  - Solution:

## Edit Distance

- Easy: The edit distance between two strings is the minimum number of operations required to transform one string into the other. The allowed operations are adding, removing or replacing a character from the string. Find edit distance between the two strings: TWXFUABGBNLTBFNSUVQW, GPNJILFXJUIZPLTVUIB.
  - 19 (correct)
  - 18
  - 1
  - 20
  - Solution:

## Knapsack

- Hard - Let's call the roundness of a number the number of zeros with which it ends. An array of n numbers is given. Choose a subset of exactly k numbers so that the roundness of the product of the selected numbers is maximized. Output the resulting roundness value. Consider n to be 5 and k to be 4. What is the answer if the array of numbers are: 539134530963895499 265657472022483040 798956216114326361 930406714691011229 562844921643925634
  - 1 (correct)
  - 2
  - 3
  - 4
  - Solution: https://codeforces.com/blog/entry/53662 (837- D)

## Median of Medians

- Easy - Which of the following is true:
  - The median of medians will return a pivot element that is greater than and less than at least 30% of all elements in the whole list. (correct)
  - The median of medians will return a pivot element that is greater than and less than at least 25% of all elements in the whole list.
  - The median of medians will return a pivot element that is greater than and less than at least 40% of all elements in the whole list.
  - The median of medians will return a pivot element that is greater than and less than at least 60% of all elements in the whole list.
  - Solution: Array M (array of medians) consists of n/5 medians of sub lists of size 5, these elements in list M is greater than and less than at-least two elements in the original list. QuickSelect will return a true median that represents the whole list which is greater than and less than ((n/5)/2) elements of list M and since each one of the M elements is greater than and less than at least two other elements in their previous sublists, therefore the true median is greater than and less than at least 3n/10, 30 percentile of elements of the whole list.

## Mergesort

- Easy - A list of n string, each of length n, is sorted into lexicographic order using the merge-sort algorithm. The worst case running time of this computation is:
  - O(n log(n))
  - O(n^2 log(n)) (correct)
  - O(n^2 + log(n))
  - O(n^2)
  - Solution: Question 6 Explanation: 
The recurrence tree for merge sort will have height Log(n). And O(n^2) work will be done at each level of the recurrence tree (Each level involves n comparisons and a comparison takes O(n) time in worst case). So time complexity of this Merge Sort will be O(n^2 logn)

## Activity Selection Algorithm

## Matroid Theory

- Easy - Expressing a problem in matroid theory is a sufficient condition to determine that it can be solved by the following type of algorithms (Consider that no algotihm overlaps between these sets):
  - Greedy Algorithms (Correct)
  - Linear Programming Algorithms
  - Dynamic Programming Algorithms
  - Graph Theory Algorithms

## DFS

## Longest Common Subsequence

## Longest Increasing Subsequence

## Bitmask DP

## Independent Set in Trees

## Huffman Coding

## FFT and DFT

## Kruskal's Algorithm

## Strassen's Algorithm

## Master Theorem

## BFS

## Strongly Connected Components

## Bellman Ford's Algorithm

## Flloyd Warshall's Algorithm

## Chinese remainder Theorem

## String hashing

## Binary Exponentiation

## Primality Testing

## Prefix Suffix Hashing

## Rabin Karp

## Manacher's Algorithm

## Bipartite Matching



## Binary Search

- Easy - The Worst case time complexity of binary search is?
  - O(log N) (correct)
  - O(N)
  - O(1)
  - O(N log N)

- Medium - You are given two integers l and r, where l < r. We will add 1 to l until the result is equal to r. Thus, there will be exactly r−l additions performed. Changed digits always form a suffix of the result written in the decimal system. Output the total number of changed digits, if you want to get r from l, adding 1 each time. Consider l to be 1 and r to be 1000000000. 
  - 1111111110 (correct)
  - 1111111111
  - 1111111100
  - 1111111101
