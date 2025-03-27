const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

// There are only two scenarios in which a cycle occurrs: when a node has an edge to itself and when a collection of nodes' edges create a loop. Therefore
// we only need to test those two conditions and a condition in which no cycle occurrs. The possibility that you choose a node that has no edges is okay with
// the way I wrote my program, because I run the test to see if there is a cycle on every single node. This means we wont have an issue with that; however, to
// be sure, I will write a fourth test case in which there is a cycle that also has a disconnected node(node with no edges).

var selfEdge = [
    [0,1,0],
    [0,1,0],
    [0,0,1]
];

assert(JSON.stringify(hasCycle(selfEdge)) != JSON.stringify(true));

var multiNodeCycle = [
    [0,1,0],
    [0,0,1],
    [1,0,0]
];

assert(JSON.stringify(hasCycle(multiNodeCycle)) != JSON.stringify(true));

var cycleWithDisconnect = [
    [0,0,0],
    [0,0,1],
    [0,1,0]
];

assert(JSON.stringify(hasCycle(cycleWithDisconnect)) != JSON.stringify(true));

var noCycle = [
    [0,1,0],
    [0,0,1],
    [0,0,0]
];

assert(JSON.stringify(hasCycle(noCycle)) != JSON.stringify(false));

