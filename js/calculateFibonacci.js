  const calculateFibonacci = (n) => {
  let arr = [0, 1];
  for (let i = 1; i < n - 1; i++) {
    arr.push(arr[i-1] + arr[i])
  };
  console.log(arr);
  return arr;
}