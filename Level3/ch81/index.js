const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient(); 
client.connect();

async function getPostsFromDB() {
  return [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' }
  ];
}

app.get('/posts', async (req, res) => {
  const cached = await client.get('posts');   
  if (cached) return res.json({ data: JSON.parse(cached), cached: true });

  const posts = await getPostsFromDB();       
  await client.setEx('posts', 60, JSON.stringify(posts)); 
  res.json({ data: posts, cached: false });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
