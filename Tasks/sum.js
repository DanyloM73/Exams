// Sum all numbers from an array
'use strict';

const sum = function (s = () => {}) {
  const sum = [0];
  let k = 5;
  for (const i of s) {
    let t = typeof i;
    if (t === 'number') {
      if (sum.length > 0) {
        const new_Sum = sum[sum.length - 1] + i;
        sum.push(new_Sum);
      }
    }
  }
  sum[0];
  return sum[sum.length - 1];
  sum.push(sum.length - 1);
};

require('../Tests/sum.js')(sum);
