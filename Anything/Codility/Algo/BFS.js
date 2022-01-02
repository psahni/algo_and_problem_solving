function BFS() {

    const graph = {};
    const visited = {};
    const queue = [];

    this.addEdge = function(v, e) {
      console.log('addEdge() ', v, e);
      if (!graph[v]) {
        graph[v] = [];
        graph[v].push(e);
      } else  {
        graph[v].push(e);
      }
    }

    this.printEdges =  function() {
      console.log(graph);
    }

    this.performBFS = function(vertex) {
      visited[vertex] = true;
      queue.push(vertex);

      while (queue.length !== 0) {
        const head = queue.shift();
        console.log(head);

        const v_edges = graph[head];

        for (i = 0; i < v_edges.length; i++) {
          const edge = v_edges[i];
          if (!visited[edge]) {
            visited[edge] = true;
            queue.push(edge);
          }
        }
      }
    }
}


const bfs = new BFS();
//---------------------------------
bfs.addEdge(0,1);
bfs.addEdge(0, 1);
bfs.addEdge(0, 2);
bfs.addEdge(1, 2);
bfs.addEdge(2, 0);
bfs.addEdge(2, 3);
bfs.addEdge(3, 3);
//---------------------------------
bfs.printEdges();
//---------------------------------
bfs.performBFS(0);
