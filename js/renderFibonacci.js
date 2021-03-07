const renderFibonacci = (sequence, container) => {
  
  const fibonacciSequence = document.createElement("div");

  sequence.forEach(number => {
    fibonacciSequence.appendChild(document.createTextNode(number));
  })

  const fibonacciContainer = document.getElementById(`${container}`);
  document.body.insertBefore(fibonacciSequence, fibonacciContainer);
};