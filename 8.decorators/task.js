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
/*function debounceDecoratorNew(func, ms) {
  let timeoutId;

  function wrapper(...args) {
    wrapper.count += 1;
    clearTimeout(timeoutId);

    if (!timeoutId) {
      func.apply(this, args);
    }

    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (args.length > 0) {
        func.apply(this, args);
        wrapper.allCount += 1;
      }
    }, ms);
  }

  wrapper.count = 0;
  wrapper.allCount = 0;

  return wrapper;
}
*/
function debounceDecoratorNew(func, ms) {
  let timeoutId;

  function wrapper(...args) {
	  clearTimeout(timeoutId);
    if (!timeoutId) {
  func.apply(this, args);
  wrapper.count += 1;
  wrapper.allCount += 1;
}

timeoutId = setTimeout(() => {
  timeoutId = null;
  if (args.length > 0) {
    func.apply(this, args);
    wrapper.allCount += 1;
  }
}, ms);
  }

  wrapper.count = 0;
  wrapper.allCount = 0;

  return wrapper;
}