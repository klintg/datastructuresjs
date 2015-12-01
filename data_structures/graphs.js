// a graph whose pairs are ordered is called a directed graph or just a digraph.
// a path is a sequence of vertices in a graph such that all vertices in the path are connected by edges.
// a cycle is a path with atleast one edge whose first and last vertices are the same.
// a simple cycle is one with no repeated edges or vertices for both directed and undirected graphs

//the first step is to build a vertex class to store the vertices of a graph.
function Vertex(label) {
  this.label = label;
}
//definition of a graph class- wel will use the adjacency list method for representing the edges of the graph.

function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for (var i=0; i < this.vertices; i++) {
    this.adj[i] = [];
    this.adj[i].push("");
  }
  this.addEdge = addEdge;
  this.toString = toString;
}
// the class above is keeping track of how many edges are represented in a graph as well as the numer of vertices by
//utilizing  an array whose length is equal to the number of vertices in the graph.
// the for loop adds a subarray to store all the adjacent vertices

//the addEdge function
function addEdge(v,w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

//showGraph() displays the graph by showing a list of all vertices and the vertices that are adjacent to them
function showGraph() {
  for(var i = 0; i < this.vertices; i++) {
    putstr(i + " -> ");
    for( var j =0; j < this.vertices; j++) {
      if (this.adj[i][j] != undefined)
      putstr(this.adj[i][j] + ' ');
    }
    print();
  }
}


//SEARCHIG  A Graph - two methods : depth-first search and breadth first search
 // depth-first search involves following path from the begining vertex until it reaches the last vertex,
 //then backtracking and following the next path untill it reaches the las vertex

//the algorithm is to visit a vertex that has not already been visited, mark it as having been visited
//then recursively visit the other unvisited vertices that are in the original vertex adjacency list.
//to make this algorithm work we will need to add an array to our graph class that stores visited vertices
//and initialize it to all false values.
/* this.marked = [];
    for(var i= 0; i < this.vertices; i++) {
    this.marked[i] = false;
  }

*/
function dfs(v) {
  this.marked[v] = true;
  if (this.adj[v] != undefined)
   console.log("Visited vertex: " + v); // only using it to show the vertices visited.
   for each ( var w in this.adj[v]) {
     if(!this.marked[w]) {
       this.dfs(w);
     }
   }
}

//Breadth-first search- starts at first vertex and tries to visit vertices as close to
//the first vertex as possible.this search moves through a graph layer by layer first examining
// layers closer to the first vertex and the moving down to the layers farthest away from the starting vertex
// find an unvisited vertex that is adjacent to the current vertex,add it to the list of visted vertices, and add it to the queue.
// take the next vertex, v, from teh graph and add it to the list of visited vertices
// add all unmarked vertices that are adjacent to v and add them to the queue

function bfs(s) {
  var queue= [];
  this.marked[s] = true;
  queue.push(s);
  while (queue.length > 0) {
    var v = queue.shift();
    if(v == undefined) {
      console.log("Visited vertex: " + v);
    }
    for each (var w in this.adj[v]) {
      if(!this.marked[w]) {
        this.edgeTo[w] = v;
        this.marked[w] = true;
        queue.push(w);
      }
    }
  }
}

//Breadth-first search automatically finds the shortest path from one vertex to another connected vertex
 //to determine the shortest path we modify the Breadth-first search algo so that it records the path
 //that lead from one vertex to another vertex

// this.edgeTo=[];   - this is added to the graph class. it keeps track of edges from one vertex to the next.

function bfs(s) {
  var queue = [];
  this.marked[s] = true;
  queue.push(s); // add to back of queue.
  while (queue.length > 0) {
    var v = queue.shift();  //removes from front of queue.
    if(v == undefined) {
      console.log("Visited vertex: " + v);
    }
    for each (var w in this.adj[v]) {
      if (!this.marked[w]) {
        this.edgeTo[w] = v;
        this.marked[w] = true;
        queue.push(w);
      }
    }
  }
}
