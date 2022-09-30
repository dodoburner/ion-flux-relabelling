from cProfile import label


# function traverseLabels(array, label, q, prev = -1) {
#   if (!label) {
#     return;
#   } else if (q.includes(label)) {
#     const index = q.indexOf(label);
#     q[index] = prev;
#   }

#   const half = array.length / 2;
#   const leftHalf = array.slice(0, half);
#   const rightHalf = array.slice(half);

#   const left = leftHalf.pop();
#   const right = rightHalf.pop();

#   traverseLabels(leftHalf, left, q, label);
#   traverseLabels(rightHalf, right, q, label);
#   return q;
# }


# function solution(h, q) {
#   let num = Math.pow(2, h) - 1;
#   let labels = [];
#   let i = 1;
#   while (i <= num) {
#     labels.push(i);
#     i++;
#   }
#   const label = labels.pop();

#   return traverseLabels(labels, label, q);
# }

def traverseLabels(array, label, q, prev=-1):
    if not label:
        return
    elif label in q:
        index = q.index(label)
        q[index] = prev

    half = len(array) // 2
    leftHalf = array[:half]
    rightHalf = array[half:]

    left = leftHalf.pop() if len(leftHalf) > 0 else None
    right = rightHalf.pop() if len(rightHalf) > 0 else None

    traverseLabels(leftHalf, left, q, label)
    traverseLabels(rightHalf, right, q, label)
    return q


def solution(h, q):
    num = pow(2, h) - 1
    labels = []
    root = num
    for x in range(1, num):
        labels.append(x)

    return traverseLabels(labels, root, q)

sol1 = solution(3, [1, 4, 7])
sol2 = solution(5, [19, 14, 28])

print (sol1)
print (sol2)