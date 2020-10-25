import { RelativeModel } from "../../interface/relation";
import * as mongoose from 'mongoose'

export abstract class Operator{
    abstract operate(modifiedField:any, relative:RelativeModel, previousState:any[]):void;
}

export class RabbitMqExecution extends Operator{
    // ExeutionType.RABBITMQ 
    operate(modifiedField:any, relative:RelativeModel, previousState:any[]){

    }
}

export class NodeJsProcess extends Operator{
    // ExeutionType.NODEJSPROCESS
    operate(modifiedField:any, relative:RelativeModel, previousState:any[]){
        let relativeModel = mongoose.model(relative.name);
        console.log({previousState, modifiedField});
    }
}