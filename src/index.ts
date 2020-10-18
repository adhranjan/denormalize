import { Rabbitmq } from "./types/rabbitmq";
import { Message } from "amqp-ts";

let rmq = new Rabbitmq('a','a');
let rmq1 = new Rabbitmq('a','a')


rmq.register((a:Message)=>{
    console.log(a.getContent());
    a._channel.ack(a);
})


rmq1.send(new Message("hello world daws"));

