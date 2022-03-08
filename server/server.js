import express from 'express';

const app = express();

app.get('/', (req, res) => res.send(`API mern-ecommerce running on 5050`));

app.listen(5050, console.log('Server mern-ecommerce running'));
