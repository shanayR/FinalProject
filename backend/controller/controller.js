import  { Coin,Order,User,Admin } from '../model/schema.js'
import mongoose from 'mongoose';
import {dbConnection} from '../database/connection.js'
import path from 'path';
import multer from 'multer';
import fs from 'fs';
const imagePath = '../frontend/cryptobit/public/images/coinlogos/'
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
      cb(null, '../frontend/cryptobit/public/images/coinlogos')
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
    
    const coin = new Coin({
        name: req.body.name,
        price:req.body.price,
        // image:req.body.coinlogo
        image:req.file.filename 
    })
    coin.save(coin).then(data =>{
        console.log(
            "testt "+data);
            return res.send(data)
        // res.redirect("/view")   
    })
}
const updateCoin = (req,res) => {
    console.log(JSON.stringify(req.file));
    // Coin.findOneAndUpdate({_id: req.params.id}, {$set:{name:req.body.name,price:req.body.price 
    //     ,req.file?{image:req.file.filename}:null
    // }}, {new: true}, (err, doc) => {
    //     if (err) {
    //         console.log("Something wrong when updating data!");
    //     }else{
    //         console.log('updated successfully');
    //         return res.send({status: 200})
    //     }
    //     console.log(doc);
    // }); 
    if(req.file){
        Coin.findById(req.params.id).then(coinData => {
            let image = coinData.image 
            fs.unlink(imagePath+image, (err) => {
                if (err) {
                  console.error(err)
                  return
                } 
                console.log('image deleted');
              
                //file removed
              })
        })
        Coin.findOneAndUpdate({_id: req.params.id}, {$set:{name:req.body.name,price:req.body.price 
            ,image:req.file.filename 
        }}, {new: true}, (err, doc) => {
            if (err) {
                console.log("Something wrong when updating data!");
            }else{
                console.log('updated successfully');
                return res.send({status: 200})
            }
            console.log(doc);
        });        
    }
    else{
        Coin.findOneAndUpdate({_id: req.params.id}, {$set:{name:req.body.name,price:req.body.price 
        }}, {new: true}, (err, doc) => {
            if (err) {
                console.log("Something wrong when updating data!");
            }else{
                console.log('updated successfully');
                return res.send({status: 200})
            }
            console.log(doc);
        });        
    }
}

const updateView = (req,res) => {
    Coin.findById(req.params.id).then(coinData => {
        // res.render('update',{coinData})
        res.send(coinData)
    })
}

const deleteCoin =  (req,res) => {
    Coin.findById(req.params.id).then(coinData => {
        let image = coinData.image 
        fs.unlink(imagePath+image, (err) => {
            if (err) {
              console.error(err)
              return
            } 
            console.log('image deleted');
          
            //file removed
          })
    })

    Coin.deleteOne({ _id:req.params.id }).then(function(){
        console.log("Data deleted"); // Success
        res.send({status: 200});
        // res.redirect('/view')
    }).catch(function(error){
        console.log(error); // Failure
    });
}
export {formView,addCoin,updateCoin,updateView,deleteCoin,coinView,upload}