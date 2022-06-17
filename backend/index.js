import express from "express";
import dotenv from 'dotenv/config';
import {router} from './routes/router.js';
// import path from 'path';
import {dbConnection} from './database/connection.js'

const app = express();
const port = process.env.API_PORT;
// const __dirname = path.resolve(); 

dbConnection()

app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use( router);

app.listen(port, function () {
    console.log(`Port is now running @ ${port}`)
  });
