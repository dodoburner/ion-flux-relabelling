function traverseLabels(array, label, q, prev = -1) {
  if (!label) {
    return;
  } else if (q.includes(label)) {
    const index = q.indexOf(label);
    q[index] = prev;
  }

  const half = array.length / 2;
  const leftHalf = array.slice(0, half);
  const rightHalf = array.slice(half);

  const left = leftHalf.pop();
  const right = rightHalf.pop();

  traverseLabels(leftHalf, left, q, label);
  traverseLabels(rightHalf, right, q, label);
  return q;
}

function solution(h, q) {
  let num = Math.pow(2, h) - 1;
  let labels = [];
  let i = 1;
  while (i <= num) {
    labels.push(i);
    i++;
  }
  const label = labels.pop();

  return traverseLabels(labels, label, q);
}

console.log(solution(3, [7, 3, 5, 1]));
console.log(solution(5, [19, 14, 28]));
