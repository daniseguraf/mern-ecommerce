import express from 'express';

const app = express();

app.get('/', (req, res) => res.send(`API running on 5050`));

app.listen(5050, console.log('Server mern-ecommerce running'));
