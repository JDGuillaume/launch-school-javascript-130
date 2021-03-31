function startCounting() {
  let number = 1;

  let counterId = setInterval(() => {
    console.log(number);
    number++;
  }, 1000);

  return counterId;
}

const counterId = startCounting();

function stopCounting() {
  clearInterval(counterId);
}

setTimeout(stopCounting, 10000);
