const asyncComponentTester = function (importPromise, latency) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(importPromise)
    }, latency)
  })
}

export { asyncComponentTester }
