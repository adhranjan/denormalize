import { modifyRelativesOnUpdate } from "./plugins/update";
import { UpdateMethods } from "./plugins/constants";

import{ connect, Schema, model} from 'mongoose' 

connect("mongodb://localhost:27017/myapp");
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
    },
    likes:[{type:String}],
    likeDetails:[{
      name:{type:String}
    }], // TODO:, make  modifyRelativesOnUpdate fesible for this
  });
  

modifyRelativesOnUpdate({ // Done
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
);

modifyRelativesOnUpdate({ // Done
connectorName:"user",
  schema:userSchema
},
{
  connectorName:"order",
  schema:orderSchema,
  query:{
    "likes[]":"name"
    }
  },
);



// modifyRelativesOnUpdate({ // WIP
//   connectorName:"user",
//     schema:userSchema
//   },
//   {
//     connectorName:"order",
//     schema:orderSchema,
//     query:{
//        "likeDetails[].name":"name"
//       }
//     },
//   );
  

export const user = model('user', userSchema);
export const order = model('order', orderSchema);