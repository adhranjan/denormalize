import { modifyRelativesOnUpdate } from "./plugins/update";
import { ActionTiming, UpdateMethods } from "./plugins/constants";

const mongoose = require('mongoose');


const conn = mongoose.createConnection('mongodb://localhost:27017/myapp');

const userSchema = new mongoose.Schema({
    name:  String,
    lastName: String,
});



const orderSchema = new mongoose.Schema({
    orderId: String,
    user:{
        name:String,
        last_name:String
    }
  });

modifyRelativesOnUpdate(userSchema,
    { 
      schema:orderSchema,
      query:{
        user:{
        name:String,
        last_name:String
        }
      }
    },
    [ActionTiming.POST],
    [UpdateMethods.UPDATE, UpdateMethods.UPDATEONE]
);

export const user = conn.model('user', userSchema);
export const order = conn.model('order', orderSchema);

