import {user, order} from './mongoose/model'

user.update({
    name:"Ranj",
    lastName:"Adhikari"
},{
    $set:{
        name:"Ranj"
    }
}).then((d:any)=>{
    console.log(d)
})

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


// import { Rabbitmq } from "./types/rabbitmq";
// import { Message } from "amqp-ts";

// let rmq = new Rabbitmq('a','a');
// let rmq1 = new Rabbitmq('a','a')


// rmq.register((a:Message)=>{
//     console.log(a.getContent());
//     a._channel.ack(a);
// })


// rmq1.send(new Message("hello world daws"));

