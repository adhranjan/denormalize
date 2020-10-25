import * as mongoose from 'mongoose'
import { createPlugin } from "./plugin_register";
import { UpdateMethods, ExeutionType } from './constants';
import { RelativeModel, ThisModel } from '../../interface/relation';
import { Operation } from './operation';
import { RabbitMqExecution, NodeJsProcess, Operator } from './operator';

export function updated (updatedOrRelated: RelativeModel & { n: number, nModified: number, ok: number }, relative: RelativeModel){
    if(!relative){
        relative = updatedOrRelated as RelativeModel;
    }
    const modifiedField = this.getUpdate()['$set'];    
    let executionType = relative.execution || ExeutionType.NODEJSPROCESS;
    let previousState = this.previousState;

    let operator:Operator;
    switch(executionType){
        case ExeutionType.RABBITMQ:
            operator = new RabbitMqExecution();
        break;
        case ExeutionType.NODEJSPROCESS:
            operator = new NodeJsProcess();
        break;
        default:
            throw new Error(`${executionType} Not recognized, accepeted: ${Object.values(ExeutionType)}`)
    }
    new Operation(operator).execute(modifiedField, relative, previousState)
}


export const  modifyRelativesOnUpdate = (
    thisModel:ThisModel,
    related:RelativeModel,
    updateMethods:UpdateMethods[] = Object.values(UpdateMethods), // Tells in which condition queue to Trigger, post or pre event
    )=>{
    createPlugin(thisModel, related, updated, updateMethods);
    return;
}