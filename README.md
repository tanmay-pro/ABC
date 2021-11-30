# Questions and the Corresponding Algortihms

## Shortest path in DAG

- Easy: Consider a directed graph whose vertices are numbered from 1 to n. There is an edge from a vertex i to a vertex j
  if and only if either j = i + 1 or j = 3 \* i. The task is to find the minimum number of edges in a path in G from vertex 1 to vertex n. What is the answer if n = 9?
  - 2 (correct)
  - 1
  - 3
  - 4
  - Solution: Just calculate

- Medium: Consider a weighted undirected graph with positive edge weights and let uv be an edge in the graph. It is known that the shortest path from the source vertex s to u has weight 53 and the shortest path from s to v has weight 65. Which one of the following statements is always true?
  - weight (u, v) < 12
  - weight (u, v) <= 12
  - weight (u, v) > 12
  - weight (u, v) >= 12 (Correct)
  - Solution:  The minimum weight happens when (S,U) + (U,V) = (S,V) Else (S,U) + (U,V) >= (S,V) Given (S,U) = 53, (S,V) = 65 53 + (U,V) >= 63 (U,V) >= 12.

## Edit Distance

- Easy: The edit distance between two strings is the minimum number of operations required to transform one string into the other. The allowed operations are adding, removing or replacing a character from the string. Find edit distance between the two strings: TWXFUABGBNLTBFNSUVQW, GPNJILFXJUIZPLTVUIB.
  - 19 (correct)
  - 18
  - 1
  - 20
  - Solution: Use Edit Distance Algorithm

## Knapsack and DP in general

- Hard - Let's call the roundness of a number the number of zeros with which it ends. An array of n numbers is given. Choose a subset of exactly k numbers so that the roundness of the product of the selected numbers is maximized. Output the resulting roundness value. Consider n to be 5 and k to be 4. What is the answer if the array of numbers are: 539134530963895499 265657472022483040 798956216114326361 930406714691011229 562844921643925634
  - 1 (correct)
  - 2
  - 3
  - 4
  - Solution: https://codeforces.com/blog/entry/53662 (837- D)

- Easy - We use Dynamic programming when?
  - We need an optimal solution.
  - Its faster than greedy.
  - The problem can be reduced to 3-SAT problem.
  - The Solution has optimal substructure. (Correct)
  - Solution: Theoretical

- Easy - The following paradigm can be used to find the solution of the problem in minimum time: Given a set of non-negative integer, and a value K, determine if there is a subset of the given set with sum equal to K:
  - Divide and Conquer
  - Dynamic Programming (Correct)
  - Greedy Algorithm
  - Branch and Bound
  - Solution: Dynamic Programming

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

## Matroid Theory

- Easy - Expressing a problem in matroid theory is a sufficient condition to determine that it can be solved by the following type of algorithms (Consider that no algotihm overlaps between these sets):
  - Greedy Algorithms (Correct)
  - Linear Programming Algorithms
  - Dynamic Programming Algorithms
  - Graph Theory Algorithms

## DFS, BFS (Graph Traversals)

- Hard - Let G=(V,E) be an undirected graph with a subgraph G1=(V1,E1). Weights are assigned to edges of G as follows. w(e)= 0 if e belongs to E1 and 1 otherwise. A single-source shortest path algorithm is executed on the weighted graph (V,E,w) with an arbitrary vertex v1 of V1 as the source. Which of the following can always be inferred from the path costs computed?
  - The number of edges in the shortest paths from v1 to all vertices of G
  - G1 is connected (Correct)
  - V1 forms a clique in G
  - G1 is a tree
  - Solution: When shortest path shortest path from v1 (one of the vertices in V1) is computed. G1 is connected if the distance from v1 to any other vertex in V1 is greater than 0, otherwise G1 is disconnected.

- Hard - In an adjacency list representation of an undirected simple graph G = (V, E), each edge (u, v) has two adjacency list entries: [v] in the adjacency list of u, and [u] in the adjacency list of v. These are called twins of each other. A twin pointer is a pointer from an adjacency list entry to its twin. If |E| = m and |V | = n, and the memory size is not a constraint, what is the time complexity of the most efficient algorithm to set the twin pointer in each entry in each adjacency list?
  - O(n^2)
  - O(m + n) (Correct)
  - O(m^2)
  - O(n*4)
  - Solution: First you need to find twins of each node. You can do this using level order traversal (i.e., BFS) once. Time complexity of BFS is Θ(m +n). And you have to use linked list for representation which is extra space (but memory size is not a constraint here). Final, time complexity is Θ(m + n) to set twin pointer. 

- Easy - Let G be a graph with n vertices and m edges. What is the tightest upper bound on the running time on Depth First Search of G? Assume that the graph is represented using adjacency matrix.
  - O(n)
  - O(m + n)
  - O(n^2) (Correct)
  - O(mn)
  - Solution: Depth First Search of a graph takes O(m+n) time when the graph is represented using adjacency list. In adjacency matrix representation, graph is represented as an "n x n" matrix. To do DFS, for every vertex, we traverse the row corresponding to that vertex to find all adjacent vertices (In adjacency list representation we traverse only the adjacent vertices of the vertex). Therefore time complexity becomes O(n2)

## Longest Common Subsequence

## Chain Matrix Multiplication, Strassen's Algorithm

- Medium - Four matrices M1, M2, M3 and M4 of dimensions pxq, qxr, rxs and sxt respectively can be multiplied is several ways with different number of total scalar multiplications. For example, when multiplied as ((M1 X M2) X (M3 X M4)), the total number of multiplications is pqr + rst + prt. When multiplied as (((M1 X M2) X M3) X M4), the total number of scalar multiplications is pqr + prs + pst. If p = 10, q = 100, r = 20, s = 5 and t = 80, then the number of scalar multiplications needed is:
  - 248000
  - 44000
  - 19000 (Correct)
  - 25000
  - Solution: It is basically matrix chain multiplication problem. We get minimum number of multiplications using ((M1 X (M2 X M3)) X M4). Total number of multiplications = 100x20x5 (for M2 x M3) + 10x100x5 + 10x5x80 = 19000.

- Medium - The time complexity of Strassen's algorithm is?
  - O(N^log(7)) (Correct)
  - O(N^log(6))
  - O(N^log(4))
  - O(N^log(5))
  - Solution: Theoretical knowledge

## Independent Set in Trees

## Huffman Coding

- Medium - A networking company uses a compression technique to encode the message before transmitting over the network. Suppose the message contains the following characters with their frequency: {a-5, b-9, c-12, d-13, e-16, f-45}. Each character in input message takes 1 byte. If the compression technique used is Huffman Coding, how many bits will be saved in the message?
  - 224
  - 800
  - 576 (Correct)
  - 324
  - Solution: Total number of characters in the message = 100. Each character takes 1 byte. So total number of bits needed = 800. After Huffman Coding, the characters can be represented with: f: 0, c: 100, d: 101, a: 1100, b: 1101, e: 111Total number of bits needed = 224. Hence, number of bits saved = 800 - 224 = 576

- Easy - Which of the following is true about Huffman Coding?
  - Huffman coding may become lossy in some cases
  - Huffman Codes may not be optimal lossless codes in some cases
  - In Huffman coding, no code is prefix of any other code. (Correct)
  - NOTA
  - Solution: Huffman coding is a lossless data compression algorithm. The codes assigned to input characters are Prefix Codes, means the codes are assigned in such a way that the code assigned to one character is not prefix of code assigned to any other character. This is how Huffman Coding makes sure that there is no ambiguity when decoding.

- Medium - Suppose the letters a, b, c, d, e, f have probabilities 1/2, 1/4, 1/8, 1/16, 1/32, 1/32 respectively. What is the average length of Huffman codes?
  - 3
  - 2.18
  - 2.25
  - 1.93 (Correct)
  - Solution:  The idea is to keep the least probable characters as low as possible by picking them first. The average length = (1 * 1/2 + 2 * 1/4 + 3 * 1/8 + 4 * 1/16 + 5 * 1/32 + 5 * 1/32) = 1.9375

## FFT and DFT

## Kruskal's Algorithm, Prim's Algorithms

- Medium - Let G be a weighted graph with edge weights greater than one and G'be the graph constructed by squaring the weights of edges in G. Let T and T' be the minimum spanning trees of G and G', respectively, with total weights t and t'. Which of the following statements is TRUE?
  - T' = T with total weight t' = t^2
  - T' = T with total weight t' < t^2
  - T' != T but total weight t' = t^2
  - NOTA (Correct)
  - Solutions: Squaring the weights of the edges in a weighted graph will not change the minimum spanning tree. Assume the opposite to obtain a contradiction. If the minimum spanning tree changes then at least one edge from the old graph G in the old minimum spanning tree T must be replaced by a new edge in tree T' from the graph G' with squared edge weights. The new edge from G' must have a lower weight than the edge from G. This implies that there exists some weights C1 and C2 such that C1 < C2 and C12 >= C22. This is a contradiction.

- Easy - Let G be an undirected connected graph with distinct edge weight. Let emax be the edge with maximum weight and emin the edge with minimum weight. Which of the following statements is false?
  - Every minimum spanning tree of G must contain emin
  - If emax is in a minimum spanning tree, then its removal must disconnect G
  - No minimum spanning tree contains emax (Correct)
  - G has a unique minimum spanning tree
  - Solution: (a) and (b) are always true. (c) is false because (b) is true. (d) is true because all edge weights are distinct for G.

## Master Theorem

- Easy - What is the time complexity for the following recurrence relation: T(n) = 2^(0.5) T(n/2) + log(n)
  - O(n^0.5) (correct)
  - O(log n)
  - O(n^0.5 log n)
  - O(n)
  - Solution: If f(n) = O(n^(log a to the base b)− ) for some constant  > 0, then T (n) = Θ(n^(log a to base b)).

## Ford Fulkerson

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
