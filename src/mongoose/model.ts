import { modifyRelativesOnUpdate } from "./plugins/update";
import { UpdateMethods } from "./plugins/constants";

import{ createConnection, Schema, } from 'mongoose'


const conn = createConnection('mongodb://localhost:27017/myapp');

const userSchema = new Schema({
    name:  
    {
      type:String,
    },
    lastName: String,
});


const orderSchema = new Schema({
    orderId: String,
    user:{
        name:String,
        last_name:String
    }
  });
  

modifyRelativesOnUpdate({
    name:"user",
    schema:userSchema
  },
  {
    name:"order",
    schema:orderSchema,
    query:{
      user:{
      name:String,
      last_name:String
      }
    }
  },
  [UpdateMethods.UPDATE, UpdateMethods.UDPATEMANY]
);

export const user = conn.model('user', userSchema);
export const order = conn.model('order', orderSchema);

