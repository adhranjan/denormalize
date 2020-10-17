import * as amqp from "amqp-ts";
 
var connection = new amqp.Connection("amqp://localhost");


export class Rabbitmq{
    private sender:any;  // Strong type
    private queue:any;
    constructor(){
        let exchange = connection.declareExchange("ExchangeName");  // should come from register
        this.queue = connection.declareQueue("QueueName");        // should come from register
        this.queue.bind(exchange);  
        this.sender = exchange
    }

    register(responseHandler:any){
        this.queue.activateConsumer(responseHandler);
    }

    send(message:amqp.Message){
        this.sender.send(message)    
    }
}