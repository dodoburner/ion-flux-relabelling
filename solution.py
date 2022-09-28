class Converter:
  label = None
  right = None
  left = None
  
def arrayToTree(array, i):
  if (i >= len(array)):
    return None
  
  node = array[i]
  node.left = arrayToTree(array, 2*i+1)
  node.right = arrayToTree(array, 2*i+2)

  return node

def postOrder(converter, labels, q, prev = -1):
  if (converter == None):
    return

  converter.label = labels.pop(0)
  if (q.count(converter.label) == 1):
    index = q.index(converter.label)
    q[index] = prev

  postOrder(converter.right, labels, q, converter.label)
  postOrder(converter.left, labels, q, converter.label)

  return q

def solution(h, q):
  num = pow(2, h) - 1
  converters = []
  labels = []
  while (num > 0):
    converter = Converter()
    converters.append(converter)
    labels.append(num)
    num -= 1

  tree = arrayToTree(converters, 0)
  return postOrder(tree, labels, q)


sol1 = solution(3, [1, 4, 7])
sol2 = solution(5, [19, 14, 28])

print(sol1)
print(sol2)




    