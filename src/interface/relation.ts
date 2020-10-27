import { ExeutionType } from '../mongoose/plugins/constants';
import * as mongoose from 'mongoose'

export interface RelativeModel{
    connectorName:string;
    execution?:ExeutionType,
    query:any;
    schema:mongoose.Schema, 
}

export interface ThisModel{
    connectorName:string;
    schema:mongoose.Schema, 
}
