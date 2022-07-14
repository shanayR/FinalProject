import  { Coin,User,Admin } from '../model/schema.js'
import path from 'path';
import multer from 'multer';
import fs from 'fs';
import CoinGecko from 'coingecko-api';
import { ChartJSNodeCanvas } from 'chartjs-node-canvas';
const imagePath = '../frontend/cryptobit/public/images/coinlogos/'
import bcrypt from 'bcryptjs'
import passport from 'passport'

const coinView =  async (req,res)=>{
    const CoinGeckoClient = new CoinGecko();
    let cryptoPriceArray = []
    await CoinGeckoClient.coins.markets(
        { vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 50,
          page: 1,
          sparkline: true,
          price_change_percentage: "24h"})
        .then(data =>{ 
            
            // console.log(data.data.length)
            let i = 1;
            data.data.forEach(data => {
                let coin = {
                    id : data.id,
                    price :data.current_price,
                }
                // console.log(data.sparkline_in_7d.price)
                cryptoPriceArray.push(coin)
                i++
            });
        })
        Coin.find().then(coinData => {
            let coinPrices = []
            for (let i = 0; i < coinData.length; i++) {
                const filtered = cryptoPriceArray.filter(thiss => thiss.id == coinData[i].name);

                    // coinData[i].price.$numberDecimal = filtered.price
                    coinPrices.push(filtered)
                    console.log(filtered)          
                }   
            res.send(coinData)

        })
}

const registerForm = (req,res)=>{
    res.render('register')
}

const cryptoRates = async (req,res)=>{
    const CoinGeckoClient = new CoinGecko();
    await CoinGeckoClient.coins.markets(
        { vs_currency: "usd",
          order: " _desc",
          per_page: 50,
          page: 1,
          sparkline: true,
          price_change_percentage: "24h"})
        .then(data =>{ 
            
            console.log(data.data.length)
            let cryptoArray = []
            let i = 1;
            data.data.forEach(data => {
                let coin = {
                    id : data.id,
                    symbol:data.symbol,
                    name: data.name,
                    current_price :data.current_price,
                    market_cap: data.market_cap,
                    logo:data.image, //get coin id whatever from iage string slice splice whatever and put in i and in sparkline
                    sparklinedata:data.sparkline_in_7d.price,
                    sparkline:"https://www.coingecko.com/coins/"+data.image.match(/(\d+)/)[0]+"/sparkline",
                    price_change_percentage_24h_in_currency:data.price_change_percentage_24h_in_currency.toFixed(2),
                }
                // console.log(data.sparkline_in_7d.price)
                cryptoArray.push(coin)
                i++
            });
            
            res.send(cryptoArray)

            // res.send(data)
        }
            )
    
    // console.log(_coinList);
    // res.send(_coinList)

}
const registerAdmin = (req,res)=>{
    Admin.findOne({ email: req.body.email }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
          const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
          const newAdmin = new Admin({
            password: hashedPassword,
            user_name: req.body.user_name,
            email:req.body.email,
            
          });
          await newAdmin.save();
          
          res.send(newAdmin);
        }
      });

}
const register = (req,res)=>{

    User.findOne({ email: req.body.email }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
          const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
          const newUser = new User({
            password: hashedPassword,
            user_name: req.body.user_name,
            email:req.body.email,
            petName:req.body.petname,
            accountNumber:req.body.accountNumber
          });
          await newUser.save();
          
          res.send("User Created");
        }
      });

    // const user = new User({
    //     user_name: req.body.user_name,
    //     email:req.body.email,
    //     password: req.body.password,
    //     // image:req.body.coinlogo
    //     petName:req.body.petname,
    //     accountNumber:req.body.accountNumber

    // })
    
}

const login = (req,res,next)=>{
    console.log(req.body)
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else {
          req.logIn(user, (err) => {
            if (err) throw err;
            res.send("Successfully Authenticated");
            console.log(req.user);
          });
        }
      })(req, res, next);
}

const viewUser = (req,res) =>{
    Admin.find().then(userData => {
        res.send(userData)     
        // res.render('view',{coinData}) 
    })
}

const forgotPass = (req,res)=>{
    
}



const coinDetail = (req,res)=>{
    Coin.findById(req.params.id).then(coinData => {
        res.send(coinData)
    })
}
const formView = (req,res)=>{
        res.render('index')
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../frontend/cryptobit/public/images/coinlogos/')
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
        description: req.body.description,
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
    const imageUpdate = req.file?{image:req.file.filename}:null
    console.log(JSON.stringify(req.file));
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
    }
    Coin.findOneAndUpdate({_id: req.params.id}, {$set:{description:req.body.description 
        ,imageUpdate
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
export {registerAdmin,login,viewUser,formView,addCoin,updateCoin,updateView,deleteCoin,coinView,upload,coinDetail,cryptoRates,register,forgotPass,registerForm}