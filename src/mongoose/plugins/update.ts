import * as mongoose from 'mongoose'
import { createPlugin } from "./plugin_register";

function updated (related:Related){
    const conditions = (this._conditions);
    const modifiedField = this.getUpdate()['$set'];
    console.log(related.collection)
    // const setToOtherRelatives = modifiedField;
    // console.log(modifiedField);
}


export const  modifyRelativesOnUpdate = (
    schema:mongoose.Schema,
    related:Related,
    todo:
    | "pre"
    | "post"
    )=>{
        let  a = createPlugin(schema, related, "update", todo, updated);
        console.log({a})
    return createPlugin(schema, related, "update", todo, updated);
}