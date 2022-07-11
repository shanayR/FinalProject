import express from "express";
import { formView,addCoin,updateCoin,updateView,deleteCoin,coinView,upload, coinDetail, cryptoRates, addUser,viewUser } from "../controller/controller.js";
const app = express();
const router = express.Router();

app.set('view engine', 'ejs');

router.get('/add',formView)
router.get('/view',coinView)
router.get('/users',viewUser)
router.post('/register',addUser)
router.get('/view/:id',coinDetail)
router.post('/add',upload.single('coinlogo'), addCoin )
router.put('/update/:id',upload.single('coinlogo'),updateCoin)
router.get('/market',cryptoRates)
router.get('/update/:id',updateView)
router.delete('/delete/:id',deleteCoin)
  
export {router}