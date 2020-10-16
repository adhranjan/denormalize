import { Trigger } from '../interface/trigger.interface'


export const trigger = (trigerrer:Trigger, message:any)=>{
    trigerrer.send(message);
}