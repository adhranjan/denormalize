import { ExeutionType } from '../mongoose/plugins/constants';
import * as mongoose from 'mongoose'

export interface Relative{
    execution?:ExeutionType,
    query:any;
    schema:mongoose.Schema, 
}