import {user, order} from './mongoose/model'

async function test(){
    await user.update({
        name:"Ranj",
        lastName:"Adhikari"
    },{
        $set:{
            lastName:"Ranjan Adhikari"
        }
    });    
}
test();

// user.create({
//     name:"Ranjan",
//     lastName:"Adhikari"
// }).then((a:any)=>{
//     order.create({
//         orderId:1212,
//         user:{
//             name:"Ranjan",
//             lastName:"Adhikari"
//         }
//     })
// })
