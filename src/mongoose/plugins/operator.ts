import { RelativeModel } from "../../interface/relation";
import * as mongoose from 'mongoose'
import { any } from "bluebird";
import e from "express";
import { order } from "../model";
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
    async operate(modifiedField:any, relative:RelativeModel, previousState:any[]){
        let relativeModel = mongoose.model(relative.connectorName, relative.schema);     
        console.log({previousState});
  
        for (let prevs of previousState){


            let a = dot.dot(relative.query);
            let singleQuery = {} as any;
            for (const [key, referedAs] of Object.entries(a)) {
                let value = prevs[referedAs as string];
                singleQuery[key] =value;
            }

            // console.log('===========1=========')
            // try{
            //     console.log(order)
            //     console.log(relativeModel);
            //     let a = await relativeModel.find(
            //         {
            //             ...dot.object(singleQuery)
            //         })    
            //         console.log(a)
            //         console.log('=====2===============')

            // }    catch(e){
            //     console.log('=====3===============')

            //     console.log(e)
            // }

        }
    }
}