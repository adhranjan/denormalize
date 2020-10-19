const mongoose = require('mongoose');
import {createPlugin} from './create_plugin'

const conn = mongoose.createConnection('mongodb://localhost:27017/myapp');

const userSchema = new mongoose.Schema({
    name:  String,
    lastName: String,
});

createPlugin(userSchema,
  { 
    collection:"Order",
    query:{
      user:{
      name:String,
      last_name:String
      }
    }
  },
  'update',
  'post'
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

