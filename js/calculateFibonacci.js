const calculateFibonacci = (sequenceLength) => {
  let arr = [0, 1];
  for (let i = 1; i < sequenceLength - 1; i++) {
    arr.push(arr[i-1] + arr[i])
  };

  return arr;
};