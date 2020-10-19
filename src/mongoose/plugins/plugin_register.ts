import * as mongoose from 'mongoose'
import * as _ from 'lodash'
import { ActionTiming, UpdateMethods } from './constants';
import { binder } from '../../helper/binder'
import { Relative } from '../../interface/relative';

// import { created } from './plugins/update';

// TODO: export 
// Post Update
// Pre Update
// Post Create
// Pre Create

export const  createPlugin = (
    schema:mongoose.Schema, 
    related:Relative,
    timings:ActionTiming[],
    action:Function,
    methods: UpdateMethods[]
    )=>{
        const binded = binder(action, related);
        const uniqueTiming = _.uniq(timings);
        for (let method of methods){
            for(let timing of uniqueTiming){
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
        }
        return;
    }
