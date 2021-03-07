const renderFibonacci = (sequence, container) => {

  const fibonacciContainer = document.getElementById(`${container}`);

  fibonacciContainer.innerHTML = '';

  sequence.forEach(number => {
    fibonacciContainer.insertAdjacentHTML('beforeend',`<p>${number}</p>`);
  })
};