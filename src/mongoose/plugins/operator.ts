import { RelativeModel } from "../../interface/relation";
import * as mongoose from 'mongoose'
import { any } from "bluebird";
import e from "express";
var dot = require('dot-object');

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
        let relativeModel = mongoose.model(relative.connectorName);     
        console.log({relativeModel})
  
        let updates = previousState.map((prevs)=>{
            let a = dot.dot(relative.query);
            let singleQuery = {} as any;
            for (const [key, referedAs] of Object.entries(a)) {
                let value = prevs[referedAs as string];
                singleQuery[key] =value;
            }

            return relativeModel.update(
                {
                    ...dot.object(singleQuery)
                },{
                $set: {"orderId":"damnnnnnnn"} // TODO:Dynamic 
            })
        })
        Promise.all(updates).then((res)=>{
            console.log(res)
        }).catch((e)=>{
            console.log(e)
        })
    }
}