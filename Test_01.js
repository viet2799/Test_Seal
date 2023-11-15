function recursiveSum(n) {
    if (n === 1) {
      return 1;
    } else {
      return n + recursiveSum(n - 1);
    }
  }
  let n =10;
  let Sum = recursiveSum(7);
  console.log(`Tổng các số từ 1 đến ${n} là: ${Sum}`)
