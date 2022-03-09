import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import chalk from 'chalk';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5050;

app.get('/', (req, res) => res.send(`API mern-ecommerce running on ${PORT}`));

app.listen(
  PORT,
  console.log(chalk.cyan.underline(`Server mern-ecommerce running on ${PORT}`))
);
