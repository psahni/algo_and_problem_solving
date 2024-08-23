const graph = {
  A: ['B', 'D'],
  B: ['A', 'C', 'E'],
  C: ['B'],
  D: ['A', 'E'],
  E: ['B', 'D', 'F'],
  F: ['E']
}

//-------------------------------------------------------------------


function BFS(start) {
  const queue = [start]
  const visited = new Set()
  const result = []

  while (queue.length > 0) {
    const item = queue.shift()
    if (!visited.has(item)) {
      visited.add(item)
      result.push(item)

      const neighbours = graph[item]
      for (const neighbour of neighbours) {
        queue.push(neighbour)
      }
    }
  }
  return result
}


const result = BFS('A')
console.log("BFS = ", result)

// const graph = {
//   A: ['B', 'D'],
//   B: ['A', 'C', 'E'],
//   C: ['B'],
//   D: ['A', 'E'],
//   E: ['B', 'D', 'F'],
//   F: ['E']
// }


// BFS =  [ 'A', 'B', 'D', 'C', 'E', 'F' ]


//-------------------------------------------------------------------

function DFS(start) {
  const stack = [start]
  const visited = new Set()
  const result = []

  while (stack.length > 0) {
      const item = stack.pop()
      if (!visited.has(item)) {
        visited.add(item)
        result.push(item)
        
        const neighbours = graph[item]
        for (const neighbour of neighbours) {
          stack.push(neighbour)
        }
      }
  }
  return result
}

const result1 = DFS('A')
console.log("DFS = ", result1)

// const graph = {
//   A: ['B', 'D'],
//   B: ['A', 'C', 'E'],
//   C: ['B'],
//   D: ['A', 'E'],
//   E: ['B', 'D', 'F'],
//   F: ['E']
// }

// DFS =  [ 'A', 'D', 'E', 'F', 'B', 'C' ]