import * as mongoose from 'mongoose'
import { binder } from '../../helper/binder'
// import { created } from './plugins/update';

// TODO: export 
// Post Update
// Pre Update
// Post Create
// Pre Create

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
        | "post",
    action:Function
    )=>{
        if(todo === "pre"){
            schema.pre(method, binder(action, related));
        }else{
            schema.post(method, binder(action, related));
        }
        return;
    }
