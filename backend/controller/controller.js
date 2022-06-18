import  { Coin,Order,User,Admin } from '../model/schema.js'
import mongoose from 'mongoose';
import {dbConnection} from '../database/connection.js'
import path from 'path';
import multer from 'multer';
const __dirname =  path.resolve()

const formView = (req,res)=>{
    Coin.find().then(coinData => {
        res.render('index',{coinData})
    })
}

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })

const addCoin = (req,res)=>{
    const coin = new Coin({
        name: req.body.name,
        price:req.body.price,
    })
    coin.save(coin).then(data =>{
        console.log(data);
        res.redirect("/add")
    })
}
const updateCoin = (req,res) => {
    console.log(req.body);
    Coin.findOneAndUpdate({_id: req.params.id}, {$set:{name:req.body.name,price:req.body.price}}, {new: true}, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }else{
            console.log('updated successfully');
            res.redirect('/add')
        }
        console.log(doc);
    });        
}

const updateView = (req,res) => {
    Coin.findById(req.params.id).then(coinData => {
        res.render('update',{coinData})
    })
}

const deleteCoin = (req,res) => {
    Coin.deleteOne({ _id:req.params.id }).then(function(){
        console.log("Data deleted"); // Success
        res.redirect('/add')
    }).catch(function(error){
        console.log(error); // Failure
    });
}
export {formView,addCoin,updateCoin,updateView,deleteCoin}