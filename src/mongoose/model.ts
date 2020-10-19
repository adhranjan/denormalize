import { modifyRelativesOnUpdate } from "./plugins/update";

const mongoose = require('mongoose');


const conn = mongoose.createConnection('mongodb://localhost:27017/myapp');

const userSchema = new mongoose.Schema({
    name:  String,
    lastName: String,
});

modifyRelativesOnUpdate(userSchema,
  { 
    collection:"Order",
    query:{
      user:{
      name:String,
      last_name:String
      }
    }
  },
  'post',
);
  

const orderSchema = new mongoose.Schema({
    orderId: String,
    user:{
        name:String,
        last_name:String
    }
  });


export const user = conn.model('user', userSchema);
export const order = conn.model('order', orderSchema);

