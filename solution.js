class Node {
  constructor(label) {
    this.label = label
    this.left = null
    this.right = null
  }
}

function arrayToTree(arrayOfNodes, i) {
  if (i >= arrayOfNodes.length) {
    return null
  }

  const node = arrayOfNodes[i]
  node.left = arrayToTree(arrayOfNodes, 2*i+1)
  node.right = arrayToTree(arrayOfNodes, 2*i+2)

  return node
}

function postOrder(node, arrayOfNumbers) {
  if (node === null) {
    return
  }

  node.label = arrayOfNumbers.shift() 	
  postOrder(node.right, arrayOfNumbers)
  postOrder(node.left, arrayOfNumbers)

  return node
}

function solution(h) {
  let num = h * 2 + 1
  let arrayOfNodes = []
  let arrayOfNumbers = []
  while (num > 0) {
    const node = new Node()
    arrayOfNodes.push(node)
    arrayOfNumbers.push(num)
    num--
  }

  const tree = arrayToTree(arrayOfNodes, 0)
  return postOrder(tree, arrayOfNumbers)
}


console.log(solution(3))


// function arrToTree(arrayOfNumbers) {
//   if (arrayOfNumbers.length === 0) {
//     return
//   }

//   const label = arrayOfNumbers.shift()
//   node = new Node(label)
//   node.right = (arrToTree(arrayOfNumbers))
//   node.left = (arrToTree(arrayOfNumbers))

//   return node
// }