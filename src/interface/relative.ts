import { ExeutionType } from '../mongoose/plugins/constants';
import * as mongoose from 'mongoose'

export interface Relative{
    execution?:{
        async?:boolean;
        type?:ExeutionType
    },
    query:any;
    schema:mongoose.Schema, 
}