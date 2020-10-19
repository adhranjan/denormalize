import * as mongoose from 'mongoose'

export const  createPlugin = (schema:any, related:Related)=>{
    schema.plugin(RegisterUpdate,related);
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

export const RegisterUpdate = (schema:mongoose.Schema, options:any)=>{
    schema.pre('update', bindLast(onUpdate, options));
}