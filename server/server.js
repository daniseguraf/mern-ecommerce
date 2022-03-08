import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

app.get('/', (req, res) => res.send(`API mern-ecommerce running on ${PORT}`));

app.listen(PORT, console.log(`Server mern-ecommerce running on ${PORT}`));
