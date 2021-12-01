var stages = {
    stage1: {
        data: [{
                "question": "Consider a directed graph whose vertices are numbered from 1 to n. There is an edge from a vertex i to a vertex j if and only if either j = i + 1 or j = 3 \* i. The task is to find the minimum number of edges in a path in G from vertex 1 to vertex n. What is the answer if n = 9 ?",
                "options": [
                    "A: 2",
                    "B: 1",
                    "C: 3",
                    "D: 4",
                ],
                "ans": "A"
            },
            {
                "question": "The edit distance between two strings is the minimum number of operations required to transform one string into the other. The allowed operations are adding, removing or replacing a character from the string. Find edit distance between the two strings:   TWXFUABGBNLTBFNSUVQW,   GPNJILFXJUIZPLTVUIB.",
                "options": [
                    "A: 18",
                    "B: 19",
                    "C: 1",
                    "D: 20",
                ],
                "ans": "B"
            },
            {
                "question": "We use Dynamic programming when?",
                "options": [
                    "A: We need an optimal solution.",
                    "B: Its faster than greedy.",
                    "C: It reduced to 3-SAT problem.",
                    "D: The Solution has optimal substructure.",
                ],
                "ans": "D"
            },
            {
                "question": "The following paradigm can be used to find the solution of the problem in minimum time: Given a set of non-negative integer, and a value K, determine if there is a subset of the given set with sum equal to K:",
                "options": [
                    "A: Divide and Conquer",
                    "B: Dynamic Programming",
                    "C: Greedy Algorithm",
                    "D: Branch and Bound",
                ],
                "ans": "B"
            },
            {
                "question": "Which of the following is true regarding the pivot element returned by the median of medians algorithm:",
                "options": [
                    "A: It is greater than and less than at least 30% of all elements in the whole list.",
                    "B: It is greater than and less than at least 25% of all elements in the whole list.",
                    "C: It is greater than and less than at least 40% of all elements in the whole list.",
                    "D: It is greater than and less than at least 60% of all elements in the whole list.",
                ],
                "ans": "A"
            },
            {
                "question": "A list of n string, each of length n, is sorted into lexicographic order using the merge-sort algorithm. The worst case running time of this computation is:",
                "options": [
                    "A: O(n log(n))",
                    "B: O(n^2 log(n))",
                    "C: O(n^2 + log(n))",
                    "D: O(n^2)",
                ],
                "ans": "B"
            },
            {
                "question": "Expressing a problem in matroid theory is a sufficient condition to determine that it can be solved by the following type of algorithms (Consider that no algotihm overlaps between these sets):",
                "options": [
                    "A: Greedy Algorithms",
                    "B: Linear Programming Algorithms",
                    "C: Dynamic Programming Algorithms",
                    "D: Graph Theory Algorithms",
                ],
                "ans": "A"
            },
            {
                "question": "Let G be a graph with n vertices and m edges. What is the tightest upper bound on the running time on Depth First Search of G? Assume that the graph is represented using adjacency matrix.",
                "options": [
                    "A: O(n)",
                    "B: O(m + n)",
                    "C: O(n^2)",
                    "D: O(mn)",
                ],
                "ans": "C"
            },
            {
                "question": "Which of the following is true about Huffman Coding?",
                "options": [
                    "A: Huffman coding may become lossy in some cases",
                    "B: Huffman Codes may not be optimal lossless codes in some cases",
                    "C: In Huffman coding, no code is prefix of any other code.",
                    "D: NOTA",
                ],
                "ans": "C"
            },
            {
                "question": "Let G be an undirected connected graph with distinct edge weight. Let emax be the edge with maximum weight and emin the edge with minimum weight. Which of the following statements is false?",
                "options": [
                    "A: Every minimum spanning tree of G must contain emin",
                    "B: If emax is in a minimum spanning tree, then its removal must disconnect G",
                    "C: No minimum spanning tree contains emax",
                    "D: G has a unique minimum spanning tree",
                ],
                "ans": "C"
            },
            {
                "question": "What is the time complexity for the following recurrence relation: T(n) = 2^(0.5) T(n/2) + log(n)",
                "options": [
                    "A: O(log n)",
                    "B: O(n^0.5 log n)",
                    "C: O(n)",
                    "D: O(n^0.5)",
                ],
                "ans": "D"
            },
            {
                "question": "The Worst case time complexity of binary search is?",
                "options": [
                    "A: O(log N)",
                    "B: O(N)",
                    "C: O(1)",
                    "D: O(N log N)",
                ],
                "ans": "A"
            },
            {
                "question": "What is the time complexity of Bellman-Ford single-source shortest path algorithm on a complete graph of n vertices?",
                "options": [
                    "A: O(n^2)",
                    "B: O(n^2 log n)",
                    "C: O(n^3 log n)",
                    "D: O(n^3)",
                ],
                "ans": "D"
            },
            {
                "question": "The Floyd-Warshall algorithm for all-pair shortest paths computation is based on:",
                "options": [
                    "A: Greedy paradigm.",
                    "B: Divide-and-Conquer paradigm.",
                    "C: Dynamic Programming paradigm. ",
                    "D: neither Greedy nor Divide-and-Conquer nor Dynamic Programming paradigm.",
                ],
                "ans": "C"
            },
            {
                "question": "The following algorithm finds longest palindromic substring in linear time:",
                "options": [
                    "A: Chinese remainder Theorem",
                    "B: Manacher's Algorithm",
                    "C: Ford Fulkerson",
                    "D: Prim's Algorithm",
                ],
                "ans": "B"
            }
        ]
    },
    stage2: {
        data: [{
                "question": "Consider a weighted undirected graph with positive edge weights and let uv be an edge in the graph. It is known that the shortest path from the source vertex s to u has weight 53 and the shortest path from s to v has weight 65. Which one of the following statements is always true?",
                "options": [
                    "A: weight (u, v) < 12",
                    "B: weight (u, v) <= 12",
                    "C: weight (u, v) > 12",
                    "D: weight (u, v) >= 12",
                ],
                "ans": "D"
            },
            {
                "question": "Four matrices M1, M2, M3 and M4 of dimensions pxq, qxr, rxs and sxt respectively can be multiplied is several ways with different number of total scalar multiplications. For example, when multiplied as ((M1 X M2) X (M3 X M4)), the total number of multiplications is pqr + rst + prt. When multiplied as (((M1 X M2) X M3) X M4), the total number of scalar multiplications is pqr + prs + pst. If p = 10, q = 100, r = 20, s = 5 and t = 80, then the number of scalar multiplications needed is:",
                "options": [
                    "A: 248000",
                    "B: 44000",
                    "C: 19000",
                    "D: 25000",
                ],
                "ans": "C"
            },
            {
                "question": "The time complexity of Strassen's algorithm is?",
                "options": [
                    "A: O(N^log(7))",
                    "B: O(N^log(4))",
                    "C: O(N^log(5))",
                    "D: O(N^log(6))",
                ],
                "ans": "A"
            },
            {
                "question": "A networking company uses a compression technique to encode the message before transmitting over the network. Suppose the message contains the following characters with their frequency: {a-5, b-9, c-12, d-13, e-16, f-45}. Each character in input message takes 1 byte. If the compression technique used is Huffman Coding, how many bits will be saved in the message?",
                "options": [
                    "A: 224",
                    "B: 800",
                    "C: 576",
                    "D: 324",
                ],
                "ans": "C"
            },
            {
                "question": "Suppose the letters a, b, c, d, e, f have probabilities 1/2, 1/4, 1/8, 1/16, 1/32, 1/32 respectively. What is the average length of Huffman codes?",
                "options": [
                    "A: 3",
                    "B: 2.18",
                    "C: 2.25",
                    "D: 1.93",
                ],
                "ans": "D"
            },
            {
                "question": "Let G be a weighted graph with edge weights greater than one and G'be the graph constructed by squaring the weights of edges in G. Let T and T' be the minimum spanning trees of G and G', respectively, with total weights t and t'. Which of the following statements is TRUE?",
                "options": [
                    "A: T' = T with total weight t' = t^2",
                    "B: T' = T with total weight t' < t^2",
                    "C: T' != T but total weight t' = t^2",
                    "D: NOTA",
                ],
                "ans": "D"
            },
            {
                "question": "You are given two integers l and r, where l < r. We will add 1 to l until the result is equal to r. Thus, there will be exactly r−l additions performed. Changed digits always form a suffix of the result written in the decimal system. Output the total number of changed digits, if you want to get r from l, adding 1 each time. Consider l to be 1 and r to be 1000000000.",
                "options": [
                    "A: 1111111110",
                    "B: 1111111100",
                    "C: 1111111101",
                    "D: 1111111111",
                ],
                "ans": "A"
            },
            {
                "question": "A simple acyclic path between source and sink which passes through only positive weighted edges is called?",
                "options": [
                    "A: Augmenting Path",
                    "B: Maximum Path",
                    "C: Critical Path",
                    "D: Residual Path",
                ],
                "ans": "A"
            },
            {
                "question": "Which of the following statement(s)is / are correct regarding Bellman-Ford shortest path algorithm? P: Always finds a negative weighted cycle, if one exist s. Q: Finds whether any negative weighted cycle is reachable from the source.",
                "options": [
                    "A: P only",
                    "B: Q only",
                    "C: P and Q both",
                    "D: Neither P nor Q",
                ],
                "ans": "B"
            },
            {
                "question": "Exponentiation is a heavily used operation in public key cryptography. Which of the following options is the tightest upper bound on the number of multiplications required to compute b^n mod(m)",
                "options": [
                    "A: O(log n)",
                    "B: O(n ^0.5)",
                    "C: O(n/ log n)",
                    "D: O(n)",
                ],
                "ans": "A"
            },
            {
                "question": "Which of the following statements are TRUE? (1) The problem of determining whether there exists a cycle in an undirected graph is in P. (2) The problem of determining whether there exists a cycle in an undirected graph is in NP. (3) If a problem A is NP-Complete, there exists a non-deterministic polynomial time algorithm to solve A.",
                "options": [
                    "A: 1,2,3",
                    "B: 1,3",
                    "C: 2,3",
                    "D: 1,2",
                ],
                "ans": "A"
            },
            {
                "question": "Let S be an NP-complete problem and Q and R be two other problems not known to be in NP. Q is polynomial time reducible to S and S is polynomial-time reducible to R. Which one of the following statements is true?",
                "options": [
                    "A: R is NP-Complete",
                    "B: R is NP-Hard",
                    "C: Q is NP-Complete",
                    "D: Q is NP-Hard",
                ],
                "ans": "B"
            },
            {
                "question": "An inversion in a an array A[] is a pair (A[i], A[j]) such that A[i] > A[j] and i < j. An array will have maximum number of inversions if it is:",
                "options": [
                    "A: sorted in increasing order",
                    "B: sorted in decreasing order",
                    "C: sorted in alternating order",
                    "D: sorted in alternating order and in reverse order",
                ],
                "ans": "B"
            },
            {
                "question": "An element in an array X is called a leader if it is greater than all elements to the right of it in X. The best algorithm to find all leaders in an array:",
                "options": [
                    "A: Solves it in linear time using a left to right pass of the array",
                    "B: Solves it in linear time using a right to left pass of the array",
                    "C: Solves it using divide and Conquer",
                    "D: Solves it in O(n^2)",
                ],
                "ans": "B"
            },
            {
                "question": "In a village, people build houses in the same side of the road. A thief plans to loot the village. He wants maximum amount of money without having any risk of getting caught. By some means, the villagers know that their adjacent house is being looted or not and thus they become alert. So the thief cannot loot contiguous two houses. Given that the thief knows the amount of money stored in each house and the road is straight and there is no turning, which is the most efficient algorithmic strategy to solve this problem?",
                "options": [
                    "A: Brute Force",
                    "B: DP",
                    "C: Backtracking",
                    "D: Divide and Conquer",
                ],
                "ans": "B"
            }
        ]
    },
    stage3: {
        data: [{
                "question": "Consider the problem of computing min-max in an unsorted array where min and max are minimum and maximum elements of array. Algorithm A1 can compute min-max in a1 comparisons without divide and conquer. Algorithm A2 can compute min-max in a2 comparisons by scanning the array linearly. What could be the relation between a1 and a2 considering the worst case scenarios?",
                "options": [
                    "A: a1 < a2",
                    "B: a1 = a2",
                    "C: a1 > a2",
                    "D: Input dependent",
                ],
                "ans": "B"
            },
            {
                "question": "Maximum Subarray Sum problem is to find the subarray with maximum sum. For example, given an array {12, -13, -5, 25, -20, 30, 10}, the maximum subarray sum is 45. The naive solution for this problem is to calculate sum of all subarrays starting with every element and return the maximum of all. We can solve this using Divide and Conquer, what will be the worst case time complexity using Divide and Conquer?",
                "options": [
                    "A: O(n)",
                    "B: O(log n)",
                    "C: O(n log n)",
                    "D: O(n ^2)",
                ],
                "ans": "C"
            },
            {
                "question": "Which of the following is not a backtracking algorithm?",
                "options": [
                    "A: Knight tour problem",
                    "B: N queen problem",
                    "C: Tower of hanoi",
                    "D: M coloring problem",
                ],
                "ans": "C"
            },
            {
                "question": "Omkar and Akmar are playing a game on a circular board with n (2≤n≤10^6) cells. The cells are numbered from 1 to n so that for each i (1≤i≤n−1) cell i is adjacent to cell i+1 and cell 1 is adjacent to cell n. Initially, each cell is empty. Omkar and Akmar take turns placing either an A or a B on the board, with Akmar going first. The letter must be placed on an empty cell. In addition, the letter cannot be placed adjacent to a cell containing the same letter. A player loses when it is their turn and there are no more valid moves. Output the number of possible distinct games where both players play optimally modulo 109+7. Note that we only consider games where some player has lost and there are no more valid moves.Two games are considered distinct if the number of turns is different or for some turn, the letter or cell number that the letter is placed on were different.A move is considered optimal if the move maximizes the player's chance of winning, assuming the other player plays optimally as well. More formally, if the player who has to move has a winning strategy, they have to make a move after which they will still have a winning strategy. If they do not, they can make any move. Output a single integer — the number of possible distinct games where both players play optimally modulo 10^ 9 + 7 if n = 42069.",
                "options": [
                    "A: 675837193",
                    "B: 675837194",
                    "C: 675837195",
                    "D: 675837196",
                ],
                "ans": "A"
            },
            {
                "question": "Consider a double hashing scheme in which the primary hash function is h1(k) = k mod 23, and the secondary hash function is h2(k) = 1+(k mod 19). Assume that the table size is 23. Then the address returned by probe 1 in the probe sequence (assume that the probe sequence begins at probe 0) for key value k = 90 is ________ .",
                "options": [
                    "A: 13",
                    "B: 15",
                    "C: 21",
                    "D: 23",
                ],
                "ans": "A"
            },
            {
                "question": "Suppose that everyone in a group of N people wants to communicate secretly with the N–1 others using symmetric key cryptographic system. The communication between any two persons should not be decodable by the others in the group. The number of keys required in the system as a whole to satisfy the confidentiality requirement is",
                "options": [
                    "A: 2N",
                    "B: N(N-1)",
                    "C: N(N-1)/2",
                    "D: (N-1)^2",
                ],
                "ans": "C"
            },
            {
                "question": "Using public key cryptography, X adds a digital signature \sigma to message M, encrypts < M, \sigma >, and sends it to Y, where it is decrypted. Which one of the following sequences of keys is used for the operations?",
                "options": [
                    "A: Encryption: X’s private key followed by Y’s private key; Decryption: X’s public key followed by Y’s public key",
                    "B: Encryption: X’s private key followed by Y’s public key; Decryption: X’s public key followed by Y’s private key",
                    "C: Encryption: X’s public key followed by Y’s private key; Decryption: Y’s public key followed by X’s private key",
                    "D: Encryption: X’s private key followed by Y’s public key; Decryption: Y’s private key followed by X’s public key",
                ],
                "ans": "D"
            },
            {
                "question": "The Fourier transform of a conjugate symmetric function is always",
                "options": [
                    "A: imaginary",
                    "B: conjugate anti-symmetric",
                    "C: real",
                    "D: conjugate symmetric",
                ],
                "ans": "C"
            },
            {
                "question": "Let SHAM3 be the problem of finding a Hamiltonian cycle in a graph G = (V,E) with V divisible by 3 and DHAM3 be the problem of determining if a Hamiltonian cycle exists in such graphs. Which one of the following is true?",
                "options": [
                    "A: Both DHAM3 and SHAM3 are NP-hard",
                    "B: DHAM3 is not SHAM3 is NP-hard",
                    "C: DHAM3 is NP-Hard, SHAM3 is not",
                    "D: Both DHAM3 and SHAM3 are not NP-hard",
                ],
                "ans": "A"
            },
            {
                "question": "Which of the following is the correct decomposition of the directed graph given below into its strongly connected components? (Graph Link: https://www.geeksforgeeks.org/wp-content/uploads/gq/2016/05/2006_46.png)",
                "options": [
                    "A: {P, Q, R, S}, {T}, {U},{V}",
                    "B: {P,Q, R, S, T, V}, {U} ",
                    "C: {P, Q, S, T, V}, {R}, {U}",
                    "D: {P, Q, R, S, T, U, V}",
                ],
                "ans": "B"
            },
            {
                "question": "Let G=(V,E) be a directed graph where V is the set of vertices and E the set of edges. Then which one of the following graphs has the same strongly connected components as G ?",
                "options": [
                    "A: G1 = {V, E1} where E1 = {(u, v) | (u, v) does not belong to E}",
                    "B: G2 = {V, E2} where E2 = {(u, v) | (u, v) belongs to E}",
                    "C: G3 = {V, E3} where E3 = {(u, v) | there is a path of length less than equal to 2 from u to v in E}",
                    "D: G4 = {V4, E} where V4 is the set of vertices in G which are not isolated",
                ],
                "ans": "B"
            },
            {
                "question": "The subset-sum problem is defined as follows. Given a set of n positive integers, S = {a1 ,a2 ,a3 ,…,an} and positive integer W, is there a subset of S whose elements sum to W? A dynamic program for solving this problem uses a 2-dimensional Boolean array X, with n rows and W+1 columns. X[i, j],1 <= i <= n, 0 <= j <= W, is TRUE if and only if there is a subset of {a1 ,a2 ,...,ai} whose elements sum to j. Which of the following is valid for 2 <= i <= n and ai <= j <= W?",
                "options": [
                    "A: X[i, j] = X[i - 1, j] ∨ X[i, j -ai]",
                    "B: X[i, j] = X[i - 1, j] ∨ X[i - 1, j - ai]",
                    "C: X[i, j] = X[i - 1, j] ∧ X[i, j - ai]",
                    "D: X[i, j] = X[i - 1, j] ∧ X[i -1, j - ai]",
                ],
                "ans": "B"
            },
            {
                "question": "A sub-sequence of a given sequence is just the given sequence with some elements (possibly none or all) left out. We are given two sequences X[m] and Y[n] of lengths m and n respectively, with indexes of X and Y starting from 0. We wish to find the length of the longest common sub-sequence(LCS) of X[m] and Y[n] as l(m,n), where an incomplete recursive definition for the function l(i,j) to compute the length of The LCS of X[m] and Y[n] is given: l(i,j) = 0, if either i=0 or j=0 = expr1, if i,j > 0 and X[i-1] = Y[j-1] = expr2, if i,j > 0 and X[i-1] != Y[j-1]",
                "options": [
                    "A: expr1 ≡ l(i-1, j) + 1",
                    "B: expr1 ≡ l(i, j-1)",
                    "C: expr2 ≡ max(l(i-1, j), l(i, j-1))",
                    "D: expr2 ≡ max(l(i-1,j-1),l(i,j))",
                ],
                "ans": "C"
            },
            {
                "question": "Let's call the roundness of a number the number of zeros with which it ends. An array of n numbers is given. Choose a subset of exactly k numbers so that the roundness of the product of the selected numbers is maximized. Output the resulting roundness value. Consider n to be 5 and k to be 4. What is the answer if the array of numbers are: 539134530963895499 265657472022483040 798956216114326361 930406714691011229 562844921643925634",
                "options": [
                    "A: 1",
                    "B: 2",
                    "C: 3",
                    "D: 4",
                ],
                "ans": "A"
            },
            {
                "question": "et G=(V,E) be an undirected graph with a subgraph G1=(V1,E1). Weights are assigned to edges of G as follows. w(e)= 0 if e belongs to E1 and 1 otherwise. A single-source shortest path algorithm is executed on the weighted graph (V,E,w) with an arbitrary vertex v1 of V1 as the source. Which of the following can always be inferred from the path costs computed?",
                "options": [
                    "A: The number of edges in the shortest paths from v1 to all vertices of G",
                    "B: G1 is connected",
                    "C: V1 forms a clique in G",
                    "D: G1 is a tree",
                ],
                "ans": "B"
            }
        ]
    }
}