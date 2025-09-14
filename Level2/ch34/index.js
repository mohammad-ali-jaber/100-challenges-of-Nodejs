async function safe(asyncFn) {
  try {
    const data = await asyncFn();
    return [null, data];
  } catch (err) {
    return [err, null];
  }
}

async function okFn() {
  return "hello";
}
async function failFn() {
  throw new Error("fail!");
}

(async () => {
  console.log(await safe(okFn));   
  console.log(await safe(failFn)); 
})();
