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
  - Solution: The minimum weight happens when (S,U) + (U,V) = (S,V) Else (S,U) + (U,V) >= (S,V) Given (S,U) = 53, (S,V) = 65 53 + (U,V) >= 63 (U,V) >= 12.

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
  - O(n\*4)
  - Solution: First you need to find twins of each node. You can do this using level order traversal (i.e., BFS) once. Time complexity of BFS is Θ(m +n). And you have to use linked list for representation which is extra space (but memory size is not a constraint here). Final, time complexity is Θ(m + n) to set twin pointer.

- Easy - Let G be a graph with n vertices and m edges. What is the tightest upper bound on the running time on Depth First Search of G? Assume that the graph is represented using adjacency matrix.
  - O(n)
  - O(m + n)
  - O(n^2) (Correct)
  - O(mn)
  - Solution: Depth First Search of a graph takes O(m+n) time when the graph is represented using adjacency list. In adjacency matrix representation, graph is represented as an "n x n" matrix. To do DFS, for every vertex, we traverse the row corresponding to that vertex to find all adjacent vertices (In adjacency list representation we traverse only the adjacent vertices of the vertex). Therefore time complexity becomes O(n2)

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
  - Solution: The idea is to keep the least probable characters as low as possible by picking them first. The average length = (1 _ 1/2 + 2 _ 1/4 + 3 _ 1/8 + 4 _ 1/16 + 5 _ 1/32 + 5 _ 1/32) = 1.9375

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

## Longest Common Subsequence

- Hard - A sub-sequence of a given sequence is just the given sequence with some elements (possibly none or all) left out. We are given two sequences X[m] and Y[n] of lengths m and n respectively, with indexes of X and Y starting from 0. We wish to find the length of the longest common sub-sequence(LCS) of X[m] and Y[n] as l(m,n), where an incomplete recursive definition for the function l(i,j) to compute the length of The LCS of X[m] and Y[n] is given: l(i,j) = 0, if either i=0 or j=0 = expr1, if i,j > 0 and X[i-1] = Y[j-1] = expr2, if i,j > 0 and X[i-1] != Y[j-1]
  - expr1 ≡ l(i-1, j) + 1
  - expr1 ≡ l(i, j-1)
  - expr2 ≡ max(l(i-1, j), l(i, j-1)) (Correct)
  - expr2 ≡ max(l(i-1,j-1),l(i,j))
  - Solution: Longest Common Subsequence Problem

## Subset Sum

- Hard - The subset-sum problem is defined as follows. Given a set of n positive integers, S = {a1 ,a2 ,a3 ,…,an} and positive integer W, is there a subset of S whose elements sum to W? A dynamic program for solving this problem uses a 2-dimensional Boolean array X, with n rows and W+1 columns. X[i, j],1 <= i <= n, 0 <= j <= W, is TRUE if and only if there is a subset of {a1 ,a2 ,...,ai} whose elements sum to j. Which of the following is valid for 2 <= i <= n and ai <= j <= W?
  - X[i, j] = X[i - 1, j] ∨ X[i, j -ai]
  - X[i, j] = X[i - 1, j] ∨ X[i - 1, j - ai] (Correct)
  - X[i, j] = X[i - 1, j] ∧ X[i, j - ai]
  - X[i, j] = X[i - 1, j] ∧ X[i -1, j - ai]
  - Solution: X[I, j] (2 <= i <= n and ai <= j <= W), is true if any of the following is true 1) Sum of weights excluding ai is equal to j, i.e., if X[i-1, j] is true. 2) Sum of weights including ai is equal to j, i.e., if X[i-1, j-ai] is true so that we get (j – ai) + ai as j

## Ford Fulkerson

- Medium - A simple acyclic path between source and sink which passes through only positive weighted edges is called?
  - Augmenting Path (Correct)
  - Maximum Path
  - Critical Path
  - Residual Path
  - Solution: Augmenting Path between source and sink is a simple path without cycles. Critical path is a path consisting of zero slack edges.

## Strongly Connected Components

- Hard - Let G=(V,E) be a directed graph where V is the set of vertices and E the set of edges. Then which one of the following graphs has the same strongly connected components as G ?

  - G1 = {V, E1} where E1 = {(u, v) | (u, v) does not belong to E}
  - G2 = {V, E2} where E2 = {(u, v) | (u, v) belongs to E} (Correct)
  - G3 = {V, E3} where E3 = {(u, v) | there is a path of length less than equal to 2 from u to v in E}
  - G4 = {V4, E} where V4 is the set of vertices in G which are not isolated
  - Solution: If we reverse directions of all arcs in a graph, the new graph has same set of strongly connected components as the original graph.

- Hard - Which of the following is the correct decomposition of the directed graph given below into its strongly connected components? (Graph Link: https://www.geeksforgeeks.org/wp-content/uploads/gq/2016/05/2006_46.png)
  - {P, Q, R, S}, {T}, {U},{V}
  - {P,Q, R, S, T, V}, {U} (Correct)
  - {P, Q, S, T, V}, {R}, {U}
  - {P, Q, R, S, T, U, V}
  - Solution: Trivial

## Bellman Ford's Algorithm

- Medium - Which of the following statement(s)is / are correct regarding Bellman-Ford shortest path algorithm? P: Always finds a negative weighted cycle, if one exist s. Q: Finds whether any negative weighted cycle is reachable from the source.

  - P Only
  - Q Only (Correct)
  - Both P and Q
  - Neither P nor Q
  - Solution: Bellman-Ford shortest path algorithm is a single source shortest path algorithm. So it can only find cycles which are reachable from a given source, not any negative weight cycle. Consider a disconnected where a negative weight cycle is not reachable from the source at all.

- Easy - What is the time complexity of Bellman-Ford single-source shortest path algorithm on a complete graph of n vertices?
  - O(n^2)
  - O(n^2 log n)
  - O(n^3) (Correct)
  - O(n^3 log n)
  - Solution: Time complexity of Bellman-Ford algorithm is O(VE) where V is number of vertices and E is number of edges. For a complete graph with n vertices, V = n, E = O(n^2). So overall time complexity becomes O(n^3)

## Flloyd Warshall's Algorithm

- Easy - The Floyd-Warshall algorithm for all-pair shortest paths computation is based on:
  - Greedy paradigm.
  - Divide-and-Conquer paradigm.
  - Dynamic Programming paradigm. (Correct)
  - neither Greedy nor Divide-and-Conquer nor Dynamic Programming paradigm.
  - Solution: Theoretical

## Manacher's Algorithm

- Easy - The following algorithm finds longest palindromic substring in linear time:
  - Chinese remainder Theorem
  - Manacher's Algorithm (Correct)
  - Ford Fulkerson 
  - Prim's Algorithm  
  - Solution: Manacher's Algorithm

## Exponentiation

- Medium - Exponentiation is a heavily used operation in public key cryptography. Which of the following options is the tightest upper bound on the number of multiplications required to compute b^n mod(m)
  - O(log n) (Correct)
  - O(n^0.5)
  - O(n/ log n)
  - O(n)

## NP Complete

- Medium - Which of the following statements are TRUE? (1) The problem of determining whether there exists a cycle in an undirected graph is in P. (2) The problem of determining whether there exists a cycle in an undirected graph is in NP. (3) If a problem A is NP-Complete, there exists a non-deterministic polynomial time algorithm to solve A.
  - 1,2,3 (Correct)
  - 1,3
  - 2,3
  - 1,2
  - Solution: 1 is true because cycle detection can be done in polynomial time using DFS. 2 is true because P is a subset of NP. 3 is true because NP complete is also a subset of NP and NP means Non-deterministic Polynomial time solution exists.

- Hard - Let SHAM3 be the problem of finding a Hamiltonian cycle in a graph G = (V,E) with V divisible by 3 and DHAM3 be the problem of determining if a Hamiltonian cycle exists in such graphs. Which one of the following is true?
  - Both DHAM3 and SHAM3 are NP-hard (Correct)
  - DHAM3 is not SHAM3 is NP-hard
  - DHAM3 is NP-Hard, SHAM3 is not
  - Both DHAM3 and SHAM3 are not NP-hard
  - Solution: The problem of finding whether there exist a Hamiltonian Cycle or not is NP Hard and NP Complete Both. Finding a Hamiltonian cycle in a graph G = (V,E) with V divisible by 3 is also NP Hard.

- Medium: Let S be an NP-complete problem and Q and R be two other problems not known to be in NP. Q is polynomial time reducible to S and S is polynomial-time reducible to R. Which one of the following statements is true?
  - R is NP-Complete
  - R is NP-Hard (Correct)
  - Q is NP-Complete
  - Q is NP-Hard
  - Solution: (A) Incorrect because R is not in NP. A NP Complete problem has to be in both NP and NP-hard. (B) Correct because a NP Complete problem S is polynomial time educable to R. (C) Incorrect because Q is not in NP. (D) Incorrect because there is no NP-complete problem that is polynomial time Turing-reducible to Q.

## FFT and DFT
- Hard - The Fourier transform of a conjugate symmetric function is always
  - imaginary
  - conjugate anti-symmetric
  - real (Correct)
  - conjugate symmetric
  - Solution: The Fourier transform of a conjugate symmetric function is always real.

## Cryptography

- Hard - Using public key cryptography, X adds a digital signature \sigma to message M, encrypts < M, \sigma >, and sends it to Y, where it is decrypted. Which one of the following sequences of keys is used for the operations?
  - Encryption: X’s private key followed by Y’s private key; Decryption: X’s public key followed by Y’s public key
  - Encryption: X’s private key followed by Y’s public key; Decryption: X’s public key followed by Y’s private key
  - Encryption: X’s public key followed by Y’s private key; Decryption: Y’s public key followed by X’s private key
  - Encryption: X’s private key followed by Y’s public key; Decryption: Y’s private key followed by X’s public key (Correct)

- Suppose that everyone in a group of N people wants to communicate secretly with the N–1 others using symmetric key cryptographic system. The communication between any two persons should not be decodable by the others in the group. The number of keys required in the system as a whole to satisfy the confidentiality requirement is
  - 2N
  - N(N - 1)
  - N(N-1)/2 (Correct)
  - (N-1)^2
  - Solution: In Symmetric Key Cryptography, access of key is with both the parties. It implies every person needs to communicate N-1 other users using different keys i.e 1+2+3...N-2+N-1 This is like number of edges needed in a complete graph with N vertices is N(N-1)/2.

## Hashing

- Hard - Consider a double hashing scheme in which the primary hash function is h1(k) = k mod 23, and the secondary hash function is h2(k) = 1+(k mod 19). Assume that the table size is 23. Then the address returned by probe 1 in the probe sequence (assume that the probe sequence begins at probe 0) for key value k = 90 is ________ .
  - 13 (Correct)
  - 15
  - 21
  - 23
  - Solution: h1(k) = k mod 23 = 90 mod 23 = 21, h2(k) = 1+(k mod 19) = 1+(90 mod 19) = 15 

## Chinese remainder Theorem

- Hard - Omkar and Akmar are playing a game on a circular board with n (2≤n≤10^6) cells. The cells are numbered from 1 to n so that for each i (1≤i≤n−1) cell i is adjacent to cell i+1 and cell 1 is adjacent to cell n. Initially, each cell is empty. Omkar and Akmar take turns placing either an A or a B on the board, with Akmar going first. The letter must be placed on an empty cell. In addition, the letter cannot be placed adjacent to a cell containing the same letter. A player loses when it is their turn and there are no more valid moves.
Output the number of possible distinct games where both players play optimally modulo 109+7. Note that we only consider games where some player has lost and there are no more valid moves. Two games are considered distinct if the number of turns is different or for some turn, the letter or cell number that the letter is placed on were different. A move is considered optimal if the move maximizes the player's chance of winning, assuming the other player plays optimally as well. More formally, if the player who has to move has a winning strategy, they have to make a move after which they will still have a winning strategy. If they do not, they can make any move.
Output a single integer — the number of possible distinct games where both players play optimally modulo 10^9+7 if n = 42069.
  - 675837193 (Correct)
  - 675837194
  - 675837195
  - 675837196
  - Solution: https://codeforces.com/blog/entry/91520 (F problem)

  ## Miscellaneous

- Medium - An inversion in a an array A[] is a pair (A[i], A[j]) such that A[i] > A[j] and i < j. An array will have maximum number of inversions if it is:
  - sorted in increasing order
  - sorted in decreasing order (Correct)
  - sorted in alternating order
  - sorted in alternating order and in reverse order
  - Solution: If the array is sorted in decreasing order, each pair will be an inversion. e.g. 5, 4, 3, 2, 1 Maximum number of inversions possible = n * (n - 1) / 2 where n is the size of the array.

- Medium - An element in an array X is called a leader if it is greater than all elements to the right of it in X. The best algorithm to find all leaders in an array:
  - Solves it in linear time using a left to right pass of the array
  - Solves it in linear time using a right to left pass of the array (Correct)
  - Solves it using divide and Conquer
  - Solves it in O(n^2)
  - Solution: https://www.geeksforgeeks.org/leaders-in-an-array/

- Medium - In a village, people build houses in the same side of the road. A thief plans to loot the village. He wants maximum amount of money without having any risk of getting caught. By some means, the villagers know that their adjacent house is being looted or not and thus they become alert. So the thief cannot loot contiguous two houses. Given that the thief knows the amount of money stored in each house and the road is straight and there is no turning, which is the most efficient algorithmic strategy to solve this problem?
  - Brute Force
  - DP (Correct)
  - Backtracking
  - Divide and Conquer
  - Solution: If we take a closer look, the problem boils down to: Given an array with some finite size where each element represents  a positive number, find the maximum sum such that no two elements are adjacent. Dynamic Programming is the efficient technique to solve this.  The algorithm can be given as follows: Maintain an auxiliary array loot. loot[0] = arr[0], loot[1] = arr[1], loot[i] = max(loot[i - 1], loot[i - 2] + arr[i]),  2 <= i < n, loot[n - 1] gives the maximum amount of money the thief can take away.

## Backtracking

- Hard - Which of the following is not a backtracking algorithm?
  - Knight tour problem
  - N queen problem
  - Tower of hanoi (Correct)
  - M coloring problem 
  - Solution: Knight tour problem, N Queen problem and M coloring problem involve backtracking. Tower of hanoi uses simple recursion.

## Divide and Conquer

- Hard - Maximum Subarray Sum problem is to find the subarray with maximum sum. For example, given an array {12, -13, -5, 25, -20, 30, 10}, the maximum subarray sum is 45. The naive solution for this problem is to calculate sum of all subarrays starting with every element and return the maximum of all. We can solve this using Divide and Conquer, what will be the worst case time complexity using Divide and Conquer.
  - O(n)
  - O(nlogn) (Correct)
  - O(log n)
  - O(n^2)

- Hard - Consider the problem of computing min-max in an unsorted array where min and max are minimum and maximum elements of array. Algorithm A1 can compute min-max in a1 comparisons without divide and conquer. Algorithm A2 can compute min-max in a2 comparisons by scanning the array linearly. What could be the relation between a1 and a2 considering the worst case scenarios?
  - a1 < a2
  - a1 > a2 (Correct)
  - a1 = a2
  - Depends on input
  - Solution: When Divide and Conquer is used to find the minimum-maximum element in an array, Recurrence relation for the number of comparisons is T(n) = 2T(n/2) + 2 where 2 is for comparing the minimums as well the maximums of the left and right subarrays On solving, T(n) = 1.5n - 2. While doing linear scan, it would take 2*(n-1) comparisons in the worst case to find both minimum as well maximum in one pass.