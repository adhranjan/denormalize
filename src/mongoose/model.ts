import { modifyRelativesOnUpdate } from "./plugins/update";
import { UpdateMethods } from "./plugins/constants";

import{ connect, Schema, model} from 'mongoose' 

// TODO: make fexible with all the way https://stackoverflow.com/questions/12806559/mongoose-model-vs-connection-model-vs-model-model
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

export const user = model('user', userSchema);
export const order = model('order', orderSchema);