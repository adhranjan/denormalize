import * as mongoose from 'mongoose'
import { createPlugin } from "./plugin_register";
import { ActionTiming, UpdateMethods, ExeutionType } from './constants';
import { Relative } from '../../interface/relative';
import { Operation } from './operation';
import { RabbitMqExecution, NodeJsProcess, Operator } from './operator';

export function updated (updatedOrRelated: Relative & { n: number, nModified: number, ok: number }, relative: Relative){
    if(!relative){
        relative = updatedOrRelated as Relative;
    }
    const modifiedField = this.getUpdate()['$set'];
    let executionType = relative.execution || ExeutionType.NODEJSPROCESS;

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
    new Operation(operator).execute(modifiedField, relative)
}


export const  modifyRelativesOnUpdate = (
    schema:mongoose.Schema,
    related:Relative,
    updateMethods:UpdateMethods[] = Object.values(UpdateMethods), // Tells in which condition queue to Trigger, post or pre event
    timing:ActionTiming = ActionTiming.POST,
    )=>{
    createPlugin(schema, related, timing, updated, updateMethods);
    return;
}