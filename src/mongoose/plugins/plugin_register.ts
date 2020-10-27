import { UpdateMethods } from './constants';
import { binder } from '../../helper/binder'
import { RelativeModel, ThisModel } from '../../interface/relation';

const getCurrentValueBeforeUpdate =  async function(next:Function,error:any) {
    let that = (this as any);
    Object.assign(this, { previousState:await that.model.find(that._conditions)})
    next();
};
  


export const  createPlugin = (
    thismodel:ThisModel, 
    related:RelativeModel,
    action:Function,
    methods: UpdateMethods[]
    )=>{
        const binded = binder(action, related);
        for (let method of methods){
            thismodel.schema.pre(method, getCurrentValueBeforeUpdate) // Set current Value before doing an update, gets array of value
            thismodel.schema.post(method,binded);
        }
        return;
    }
