import express from "express";
import { formView,addCoin,updateCoin,updateView,deleteCoin,coinView,upload } from "../controller/controller.js";
const app = express();
const router = express.Router();

app.set('view engine', 'ejs');

router.get('/add',formView)
router.get('/view',coinView)
router.post('/add',upload.single('coinlogo'), addCoin )
router.post('/update/:id',upload.single('coinlogo'),updateCoin)
router.get('/update/:id',updateView)
router.delete('/delete/:id',deleteCoin)
  
export {router}