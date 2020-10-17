import { Rabbitmq } from "./types/rabbitmq";
import { Message } from "amqp-ts";

let rmq = new Rabbitmq();
let rmq1 = new Rabbitmq()

/* 
    in orderschema
    usersUsercb = (updatedUser)=>{
        let user = a.getContent()
    }   
*/
rmq.register((a:Message)=>{
    console.log('hiiiii');
    console.log(a.getContent());
})


rmq1.send(new Message("hello world wow"));

