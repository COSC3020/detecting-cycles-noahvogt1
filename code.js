function helper(graph, startNode, nodesVisited = []) {
    nodesVisited.push(startNode);
    
    for (let i = 0; i < graph.length; i++) {
        if (graph[startNode][i] != 0) {
            if (nodesVisited.includes(i) || i == startNode) {
                return true;
            }
            
            if (helper(graph, i, nodesVisited)) {
                return true;
            }
        }
    }
    nodesVisited.pop();
    return false;
}

function hasCycle(graph) {
    for (let startNode = 0; startNode < graph.length; startNode++) {
        let cycle = helper(graph, startNode);
        if (cycle) {
            return true;
        }
    }
    return false;
}
