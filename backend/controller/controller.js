import  { Coin,Order,User,Admin } from '../model/schema.js'
import mongoose from 'mongoose';
import {dbConnection} from '../database/connection.js'
import path from 'path';

const __dirname =  path.resolve()

const formView = (req,res)=>{
    res.sendFile(__dirname+'/index.html')
}
const addCoin = (req,res)=>{
    const coin = new Coin({

        name: req.body.name,
        price:req.body.price
    })
    coin.save(coin).then(data =>{
        console.log(data);
        res.redirect("/add")
    })
}
const updateCoin = (req,res) => {
    
}
export {formView,addCoin,updateCoin}