class Converter {
  constructor() {
    this.label = null
    this.left = null
    this.right = null
  }
}

function arrayToTree(converters, i) {
  if (i >= converters.length) {
    return null
  }

  const node = converters[i]
  node.left = arrayToTree(converters, 2*i+1)
  node.right = arrayToTree(converters, 2*i+2)

  return node
}

function postOrder(converter, labels, q, prev = -1) {
  if (converter === null) {
    return
  }

  converter.label = labels.shift()
  if (q.includes(converter.label)) {
    let index = q.indexOf(converter.label)
    q[index] = prev
  }
  postOrder(converter.right, labels, q, converter.label)
  postOrder(converter.left, labels, q, converter.label)

  return q
}

function solution(h, q) {
  let num = Math.pow(2, h) - 1
  let converters = []
  let labels = []
  while (num > 0) {
    const converter = new Converter()
    converters.push(converter)
    labels.push(num)
    num--
  }

  const tree = arrayToTree(converters, 0)
  return postOrder(tree, labels, q)
}

console.log(solution(3, [7, 3, 5, 1]));
console.log(solution(5, [19, 14, 28]));
