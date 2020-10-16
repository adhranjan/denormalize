import * as amqp from "amqp-ts";
 
var connection = new amqp.Connection("amqp://localhost");


export class Rabbitmq{
    private sender:any;  // Strong type
    constructor(){
        let exchange = connection.declareExchange("ExchangeName");  // should come from register
        let queue = connection.declareQueue("QueueName");        // should come from register
        queue.bind(exchange);  
        queue.activateConsumer(this.received);
        this.sender = exchange
        this.send()
    }
    register(){

    }
    unregister(){

    }
    send(){
        var msg2 = new amqp.Message("rnc");
        this.sender.send(msg2)    
    }

    received (message:any) { // should come from register
        console.log("Message received: " + message.getContent());
        // ack
    }

    
}