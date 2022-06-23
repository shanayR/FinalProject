import express from "express";
import { formView,addCoin,updateCoin,updateView,deleteCoin,coinView } from "../controller/controller.js";
const app = express();
const router = express.Router();

app.set('view engine', 'ejs');

router.get('/add',formView)
router.get('/view',coinView)
router.post('/add', addCoin )
router.post('/update/:id',updateCoin)
router.get('/update/:id',updateView)
router.get('/delete/:id',deleteCoin)
  
export {router}