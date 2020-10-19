import * as mongoose from 'mongoose'

export const  createPlugin = (
    schema:mongoose.Schema, 
    related:Related,
    method:
    | "count"
    | "find"
    | "findOne"
    | "findOneAndRemove"
    | "findOneAndUpdate"
    | "update"
    | "updateOne"
    | "updateMany",
    todo:
    | "pre"
    | "post"
)=>{
    if(todo === "pre"){
        schema.pre(method, bindLast(onUpdate, related));
    }else{
        schema.post(method, bindLast(onUpdate, related));
    }
}



function bindLast(fn:any,options:any) {   
    return function() {
        Array.prototype.push.apply(arguments, [options]);
        return fn.apply(this, arguments);
    };
}

function onUpdate (related:Related){
    const modifiedField = this.getUpdate()['$set'];
    const setToOtherRelatives = modifiedField;
}