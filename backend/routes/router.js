import express from "express";
import {registerAdmin, login,registerForm,formView,addCoin,updateCoin,updateView,deleteCoin,coinView,upload, coinDetail, cryptoRates, register,viewUser } from "../controller/controller.js";
const app = express();
const router = express.Router();

app.set('view engine', 'ejs');

router.get('/add',formView) // not using in react
router.post('/registeradmin',registerAdmin)
router.get('/view',coinView) 
router.get('/admins',viewUser) 
router.post('/register',register)
router.get('/register',registerForm)
router.get('/view/:id',coinDetail)
router.post('/add',upload.single('coinlogo'), addCoin )
router.put('/update/:id',upload.single('coinlogo'),updateCoin)
router.get('/market',cryptoRates)
router.get('/update/:id',updateView)
router.delete('/delete/:id',deleteCoin)
router.post('/login',login)  
export {router}