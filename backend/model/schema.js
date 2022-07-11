import { Decimal128 } from "mongodb";
import mongoose from "mongoose";

const coinSchema = new mongoose.Schema({
    // id: {
    //     type: mongoose.Schema.Types.ObjectId
    // },
    name: {
        type: String
    },
    description: {
        type: String
    },
    image:{
        // binData: Buffer
        // data: Buffer,
        // contentType: String
        type:String,
    },
    price:{
        type: Decimal128
    }
  });


const walletSchema =  new mongoose.Schema({
    
    coin_name: {
        type: mongoose.Schema.Types.ObjectId , ref: 'Coin'
    },
    quantity:{
        type:Decimal128
    },
    coinRate: {
        type: mongoose.Schema.Types.ObjectId , ref: 'Coin' //$ rate per coin
    },
    // total_amount: {
    //     type: Decimal128 //total $ value of the total coins in wallet
    // }
})
  
const userSchema = new mongoose.Schema({
    user_name: {
        type: String
    },
    email:{
        type: String
    },
    password: {
        type: String
    },
    petName:{
        type: String
    },
    accountNumber: {
        type: Number
    }
})

const adminSchema = new mongoose.Schema({
    user_name: {
        type: String
    },
    email:{
        type: String
    },
    password: {
        type: String
    },
    admin_id: {
        type: String
    }
})

// The alternative to the export model pattern is the export schema pattern.
const Coin = mongoose.model('Coin',coinSchema);
const Wallet = mongoose.model('Wallet', walletSchema);
const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', adminSchema);


export { Wallet,Coin,User,Admin}