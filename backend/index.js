import express from "express";
import dotenv from 'dotenv/config';
import {router} from './routes/router.js';
// import path from 'path';
import {dbConnection} from './database/connection.js'
import multer from 'multer';
import cors from 'cors'

const app = express();
const port = process.env.API_PORT;
// const __dirname = path.resolve(); 
dbConnection()


app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.set('view engine', 'ejs');
app.use( router);


app.listen(port, function () {
    console.log(`Port is now running @ ${port}`)
  });
