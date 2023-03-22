function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  const avg = sum / arr.length;

  return {
    min,
    max,
    avg: parseFloat(avg.toFixed(2))
  };
}
function summElementsWorker(...rest) {
  if (!rest.length) {
    return 0;
  }
  return rest.reduce((acc, val) => acc + val, 0);
}

function differenceMaxMinWorker(...rest) {
  if (!rest.length) {
    return 0;
  }
  const maxVal = Math.max(...rest);
  const minVal = Math.min(...rest);
  return maxVal - minVal;
}

function differenceEvenOddWorker(...rest) {
  if (!rest.length) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < rest.length; i++) {
    if (rest[i] % 2 === 0) {
      sumEvenElement += rest[i];
    } else {
      sumOddElement += rest[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...rest) {
  if (!rest.length) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < rest.length; i++) {
    if (rest[i] % 2 === 0) {
      sumEvenElement += rest[i];
      countEvenElement++;
    }
  }
  return countEvenElement ? sumEvenElement / countEvenElement : 0;
}


function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let arr of arrOfArr) {
    const workerResult = func(...arr);
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }
  return maxWorkerResult;
}
