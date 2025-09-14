const axios = require('axios');

async function callB(a, b, retries = 3) {
  let lastErr;
  for (let i = 0; i < retries; i++) {
    try {
      const res = await axios.get(`http://localhost:4000/sum?a=${a}&b=${b}`);
      return res.data;
    } catch (err) {
      lastErr = err;
      console.log(`Retry ${i + 1} failed`);
    }
  }
  throw lastErr;
}

callB(5, 7)
  .then(result => console.log('Result from Service B:', result))
  .catch(err => console.error('All retries failed:', err.message));
