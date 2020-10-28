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
        name:"A403PNqL"
    },{
        $set:{
            age:22,
            name: "Ranjan",
            lastName:"Adhikari",
        }
    }).then((d:any) => {
        console.log({d});
    }); 
}

setTimeout(()=>{
    test();
},2000);




// async function create(){
//     for(let i=0; i!==10; i++){
//         let name = makeid(8);
//         let lastname = makeid(5);
        
//         await user.create({
//             name:name,
//             lastName:lastname
//         })
        
//         for(let j=0; j!==i;j++){
//             order.create({
//                 orderId:makeid(5),
//                 user:{
//                     name:name,
//                     lastName:name
//                 }
//             })
//         }
//         }
// }


// create();