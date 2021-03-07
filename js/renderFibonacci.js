const renderFibonacci = (sequence, container) => {

  const fibonacciContainer = document.getElementById(`${container}`);

  sequence.forEach(number => {
    fibonacciContainer.insertAdjacentHTML('beforeend',`<p>${number}</p>`);
  })
};