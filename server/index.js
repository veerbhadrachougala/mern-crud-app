
import express, { urlencoded } from 'express';
import connection from './database/db.js'
import dotenv from 'dotenv'
import cors from 'cors'
import Routes from './routes/route.js';

const app = express();
app.use(cors());
app.use(urlencoded());
app.use(express.json());

dotenv.config();


app.use('/', Routes)

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username, password);

app.listen(PORT, ()=> console.log(`server is running successfully on PORT ${PORT}`))