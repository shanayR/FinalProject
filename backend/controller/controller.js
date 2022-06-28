import  { Coin,Order,User,Admin } from '../model/schema.js'
import mongoose from 'mongoose';
import {dbConnection} from '../database/connection.js'
import path from 'path';
import multer from 'multer';
const __dirname =  path.resolve()

const coinView = (req,res)=>{
    Coin.find().then(coinData => {
        res.send(coinData)
        // res.render('view',{coinData}) 
    })
}
const formView = (req,res)=>{
        res.render('index')
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../frontend/cryptobit/public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage });


const addCoin = (req,res)=>{
    // req.file is the `profile-file` file
    // req.body will hold the text fields, if there were any
    console.log(JSON.stringify(req.file))
    // var response = '<a href="/">Home</a><br>'
    // response += "Files uploaded successfully.<br>"
    // response += `<img src="${req.file.path}" /><br>`
    const coin = new Coin({
        name: req.body.name,
        price:req.body.price,
        image:req.file.filename
    })
    coin.save(coin).then(data =>{
        console.log(data);
        res.redirect("/view")
    })
    // return res.send(response)
}
const updateCoin = (req,res) => {
    console.log(JSON.stringify(req.file));
    Coin.findOneAndUpdate({_id: req.params.id}, {$set:{name:req.body.name,price:req.body.price,image:req.file.filename}}, {new: true}, (err, doc) => {
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
        res.redirect('/view')
    }).catch(function(error){
        console.log(error); // Failure
    });
}
export {formView,addCoin,updateCoin,updateView,deleteCoin,coinView,upload}