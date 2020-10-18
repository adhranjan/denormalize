import{Queue, Exchange, Connection, Message} from "amqp-ts";
 
var connection = new Connection("amqp://localhost");


export class Rabbitmq{
    private exchange:Exchange;
    private queue:Queue;

    constructor(exchangeRoute:string, queue:string){
        this.exchange = connection.declareExchange(exchangeRoute);
        this.queue = connection.declareQueue(queue);
        this.queue.bind(this.exchange);  
    }

    register(responseHandler:any){
        this.queue.activateConsumer(responseHandler)
    }

    send(message:Message){
        this.exchange.send(message)    
    }
}