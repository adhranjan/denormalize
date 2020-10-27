import { modifyRelativesOnUpdate } from "./plugins/update";
import { UpdateMethods } from "./plugins/constants";

import{ createConnection, Schema, } from 'mongoose'


const conn = createConnection('mongodb://localhost:27017/myapp');

const userSchema = new Schema({
    age:Number,
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
    connectorName:"user",
    schema:userSchema
  },
  {
    connectorName:"order",
    schema:orderSchema,
    query:{
      user:{
        name:"name"
      }
    }
  },
  [UpdateMethods.UPDATEONE, UpdateMethods.UDPATEMANY]
);

export const user = conn.model('user', userSchema);
export const order = conn.model('order', orderSchema);

