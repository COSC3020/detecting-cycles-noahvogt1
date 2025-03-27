# Detecting Cycles in Graphs
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

No outside help was used for this program. Other than copying some code from the graph search because I realized that the two could be solved similarly

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? 

The worst case big $\Theta$ seems like it should be $\Theta(V^4)$  with V
being the number of vertices in the graph. This is because we get $\Theta(V)$ 
from the first loop in the hasCycle() function because we iterate over all of
the vertices. Then we use another loop for checking for any edges between each
vertex which gives us another $\Theta(V)$. Then we have .includes() which iterates
over all of the vertices that we have already covered which gives us another $\Theta(V)$.
Then finally the recursions worst case complexity would be to iterate over each vertex
giving us another $\Theta(V)$. All in all this is my reasoning as to why the $\Theta$ 
complexity wold be $\Theta(V^4)$.
