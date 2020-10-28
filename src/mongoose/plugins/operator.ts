import { RelativeModel } from "../../interface/relation";
import * as mongoose from 'mongoose'
import * as  dot from 'dot-object';

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
        let relativeMap = dot.dot(relative.query);
        let setQuery = {} as any;

        for (const [key, referedAs] of Object.entries(relativeMap)) {
            setQuery[key] = modifiedField[referedAs as string];
        }

        return Promise.all(previousState.map((prevs)=>{
            let singleQuery = {} as any;
            for (const [key, referedAs] of Object.entries(relativeMap)) {
                let value = prevs[referedAs as string];
                singleQuery[key] =value
            }            
            return relativeModel.updateMany(
                {
                    ...dot.object(singleQuery)
                },{
                $set:{
                    ...setQuery
                } 
            })
        }));
    }
}