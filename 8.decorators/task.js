//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(args);
    const objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.value);
      return "Из кэша: " + objectInCache.value;
    }

    const result = func(...args);
    cache.push({ hash, value: result });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }

  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId;
  let count = 0;
  let allCount = 0;

  function wrapper(...args) {
    allCount++;
    if (!timeoutId) {
      func.apply(this, args);
      count++;
    } else {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (args.length > 0) {
        func.apply(this, args);
        count++;
      }
    }, delay);
  }

  wrapper.count = () => count;
  wrapper.allCount = () => allCount;

  return wrapper;
}
