# Denormalize

Denormalize is a Nodejs library for dealing with Denormalized Reference in Mongo db.

## Installation

TODO: Publish to npm.

```
Not Ready Yet lol 
```

## Usage

```ts
import { modifyRelativesOnUpdate } from "denormalize";

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
);



```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

 - [x] Update simple Reference 
 - [x] Update Array of strings Reference
 - [ ] Update Array of Objects Reference
 
 
## License
[MIT](https://choosealicense.com/licenses/mit/)
