import  { Coin,User,Admin } from '../model/schema.js'
import path from 'path';
import multer from 'multer';
import fs from 'fs';
import CoinGecko from 'coingecko-api';
import { ChartJSNodeCanvas } from 'chartjs-node-canvas';
const imagePath = '../frontend/cryptobit/public/images/coinlogos/'
// const __dirname =  path.resolve()

const coinView = (req,res)=>{
    Coin.find().then(coinData => {
        res.send(coinData)
        // res.render('view',{coinData}) 
    })
}

const cryptoRates = async (req,res)=>{
    const CoinGeckoClient = new CoinGecko();
    await CoinGeckoClient.coins.markets(
        { vs_currency: "usd",
          order: "market_cap_desc",
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
                    sparklinedata:data.sparkline_in_7d.price,
                    sparkline:"https://www.coingecko.com/coins/"+i+"/sparkline",
                    price_change_percentage_24h_in_currency:data.price_change_percentage_24h_in_currency.toFixed(2),
                    logo:data.image
                }
                // console.log(data.sparkline_in_7d.price)
                cryptoArray.push(coin)
                i++
            });
            res.send(cryptoArray)
            // res.send(data)
        }
            )
    let data = await CoinGeckoClient.exchanges.fetchTickers('bitfinex', {
        coin_ids: ['bitcoin']
    });
    var _coinList = {};
    var _datacc = data.data.tickers.filter(t => t.target == 'USD');
    [
        'BTC'
    ].forEach((i) => {
        var _temp = _datacc.filter(t => t.base == i);
        var _res = _temp.length == 0 ? [] : _temp[0];
        _coinList[i] = _res.last;
    })
    
    console.log(_coinList);
    // res.send(_coinList)

}

const addUser = (req,res)=>{
    const user = new User({
        user_name: req.body.user_name,
        email:req.body.email,
        password: req.body.password,
        // image:req.body.coinlogo
        petName:req.body.petName,
        accountNumber:req.body.accountNumber

    })
    user.save(user).then(data =>{
        console.log(
            "testt "+data);
            return res.send(data)
        // res.redirect("/view")   
    })
}

const viewUser = (req,res) =>{
    User.find().then(userData => {
        res.send(userData)
        // res.render('view',{coinData}) 
    })
}

const forgotPass = (req,res)=>{
    
}

const addAdmin = (req,res)=>{

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
    Coin.findOneAndUpdate({_id: req.params.id}, {$set:{name:req.body.name,price:req.body.price 
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
export {viewUser,formView,addCoin,updateCoin,updateView,deleteCoin,coinView,upload,coinDetail,cryptoRates,addUser,forgotPass,addAdmin}