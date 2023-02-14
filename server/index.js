
import express from 'express';
import connection from './database/db.js'
import dotenv from 'dotenv'

const app = express();
dotenv.config()

const PORT = 5000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username, password);

app.listen(PORT, ()=> console.log(`server is running successfully on PORT ${PORT}`))