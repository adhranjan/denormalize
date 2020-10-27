import {user, order} from './mongoose/model'
function makeid(length:number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 
 
async function test(){
    await user.updateMany({
    },{
        $set:{
            age:22,
            name: makeid(5),
            lastName:makeid(5),
        }
    }).then((d:any) => {
        console.log({d});
    }); 
}
setTimeout(()=>{
    test();
},5000);

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
