import { Relative } from "../../interface/relative";

export abstract class Operator{
    abstract operate(modifiedField:any, relative:Relative):void;
}

export class RabbitMqExecution extends Operator{
    // ExeutionType.RABBITMQ 
    operate(modifiedField:any, relative:Relative){

    }
}

export class NodeJsProcess extends Operator{
    // ExeutionType.NODEJSPROCESS
    operate(modifiedField:any, relative:Relative){
        console.log(modifiedField, relative);
    }
}