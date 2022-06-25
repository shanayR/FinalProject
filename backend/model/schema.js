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


const orderSchema =  new mongoose.Schema({
    // id: {
    //     type: mongoose.Schema.Types.ObjectId
    // },
    order_no: {
        type: Number
    },
    coin_name: {
        type: mongoose.Schema.Types.ObjectId , ref: 'Coin'
    },
    quantity: {
        type: Number
    },
    total_amount: {
        type: Decimal128
    }
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
        type: Number
    }
})

// The alternative to the export model pattern is the export schema pattern.
const Coin = mongoose.model('Coin',coinSchema);
const Order = mongoose.model('Order', orderSchema);
const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', adminSchema);


export { Order,Coin,User,Admin}