async function retry(fn, times) {
  let lastErr;
  for (let i = 0; i < times; i++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      console.log(`Attempt ${i + 1} failed:`, err.message);
    }
  }
  throw lastErr;
}

let counter = 0;
async function unstable() {
  counter++;
  if (counter < 3) throw new Error("Not yet!");
  return "Success on try " + counter;
}

(async () => {
  const result = await retry(unstable, 5);
  console.log(result); 
})();