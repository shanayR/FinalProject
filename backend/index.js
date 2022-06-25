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


const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    // const host = req.host;
    // const filePath = req.protocol + "://" + host + '/' + req.file.path;
    callback(null, 'E:/New folder/shanay/MERN/FinalProject/frontend/cryptobit/public/images');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname);
  }
});

app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.set('view engine', 'ejs');
app.use( router);


app.listen(port, function () {
    console.log(`Port is now running @ ${port}`)
  });
