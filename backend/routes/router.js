import express from "express";
import { formView,addCoin,updateCoin } from "../controller/controller.js";
const app = express();
const router = express.Router();

app.set('view engine', 'ejs');

router.get('/add',formView)
router.post('/add', addCoin )
router.post('update',updateCoin)
  
export {router}