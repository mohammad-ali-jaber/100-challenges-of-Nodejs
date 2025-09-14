const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = { openapi: '3.0.0', info: { title: 'API', version: '1.0.0' }};

const app = express();
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/hello', (req, res) => res.send('Hello'));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));