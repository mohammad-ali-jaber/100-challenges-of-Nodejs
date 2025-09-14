const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());

app.get('/',(req,res)=>res.send('ok'));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));