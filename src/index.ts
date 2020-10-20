import {user, order} from './mongoose/model'

async function test(){
    await user.updateOne({
        name:"Ranj",
        lastName:"Adhikari"
    },{
        $set:{
            lastName:"Ranjan Adhikari"
        }
    });    
}
setTimeout(()=>{
    test();
},1000);

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
