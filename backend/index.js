import express from "express";
import dotenv from 'dotenv/config';
import {router} from './routes/router.js';
import {dbConnection} from './database/connection.js'
import cors from 'cors'
import passport from 'passport';
import passportLocal from 'passport-local';
import cookieParser from "cookie-parser";
import bcrypt from 'bcryptjs';
import session from 'express-session';
import { passportstr } from "./passportConfig.js";

const app = express();
const port = process.env.PORT || process.env.API_PORT;
// const __dirname = path.resolve(); 
dbConnection()


var corsOptions = {
  origin: process.env.FRONT_URI,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials:true
}



app.use(cors(corsOptions))
app.use(express.urlencoded({extended:false}));

app.use(express.json())

app.set('view engine', 'ejs');

app.use(session({
  secret: 'cryptobitsecret',
  resave:true,
  saveUninitialized:true
}))

app.use(cookieParser('cryptobitsecret'))
app.use(passport.initialize());
app.use(passport.session());
// require("../passportConfig")(passport);
passportstr(passport)


app.use( router);

app.listen(port, function () {
  console.log(`Port is now running @ ${port}`)
});
