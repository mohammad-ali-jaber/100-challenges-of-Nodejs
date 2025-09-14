const express = require('express');
const IORedis = require('ioredis');

const app = express();
const redis = new IORedis(); 

const BURST = 10;          
const REFILL_RATE = 1;     

app.use(async (req, res, next) => {
  const key = `rate:${req.ip}`;
  const now = Date.now();

  const data = await redis.hgetall(key);
  let tokens = data.tokens ? Number(data.tokens) : BURST;
  const last = data.last ? Number(data.last) : now;
  tokens += (now - last) / 1000 * REFILL_RATE;
  if (tokens > BURST) tokens = BURST;

  if (tokens < 1) {
    return res.status(429).send('Too Many Requests');
  }

  await redis.hmset(key, { tokens: tokens - 1, last: now });
  await redis.expire(key, Math.ceil(BURST / REFILL_RATE) * 2);

  next();
});

app.get('/', (req, res) => res.send('Hello'));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
