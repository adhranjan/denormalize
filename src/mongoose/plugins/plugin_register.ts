import * as mongoose from 'mongoose'
import * as _ from 'lodash'
import { ActionTiming, UpdateMethods } from './constants';
import { binder } from '../../helper/binder'
import { Relative } from '../../interface/relative';

export const  createPlugin = (
    schema:mongoose.Schema, 
    related:Relative,
    timing:ActionTiming,
    action:Function,
    methods: UpdateMethods[]
    )=>{
        const binded = binder(action, related);
        for (let method of methods){
            switch (timing){
                case ActionTiming.PRE:
                    schema.pre(method,binded);
                    break;
                case ActionTiming.POST:
                    schema.post(method,binded);
                    break;
                default:
                    break;
            }
        }
        return;
    }
