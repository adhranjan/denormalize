import { ExeutionType } from '../mongoose/plugins/constants';
import * as mongoose from 'mongoose'

export interface RelativeModel{
    name:string;
    execution?:ExeutionType,
    query:any;
    schema:mongoose.Schema, 
}

export interface ThisModel{
    name:string;
    schema:mongoose.Schema, 
}
