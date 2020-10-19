import * as mongoose from 'mongoose'
import { createPlugin } from "./plugin_register";
import { ActionTiming, UpdateMethods } from './constants';
import { Relative } from '../../interface/relative';

export function updated (updatedOrRelated: Relative | { n: number, nModified: number, ok: number }, relative: Relative){
    if(!relative){
        relative = updatedOrRelated as Relative;
    }
    const modifiedField = this.getUpdate()['$set'];
    /*
        TODO: To deicde,
        1). Use Message Queue
        2). Use Same node js process
        to update the relative
    */
}


export const  modifyRelativesOnUpdate = (
    schema:mongoose.Schema,
    related:Relative,
    timing:ActionTiming[], // TODO: Think this should be only one, PRE OR POST,
    updateMethods:UpdateMethods[] = Object.values(UpdateMethods) // Tells in which condition queue to Trigger, post or pre event
    )=>{
    createPlugin(schema, related, timing, updated, updateMethods);
    return;
}