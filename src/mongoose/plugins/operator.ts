import { RelativeModel } from "../../interface/relation";
import * as mongoose from 'mongoose'
import * as  dot from 'dot-object';
import { indexOf, result } from "lodash";

export abstract class Operator{
    abstract operate(modifiedField:any, relative:RelativeModel, previousState:any[]):void;
}

export class RabbitMqExecution extends Operator{
    // ExeutionType.RABBITMQ 
    operate(modifiedField:any, relative:RelativeModel, previousState:any[]){

    }
}

export class NodeJsProcess extends Operator{
    // ExeutionType.NODEJSPROCESS
    operate(modifiedField:any, relative:RelativeModel, previousState:any[]){
        let relativeModel = mongoose.model(relative.connectorName);     
        let relativeMap = dot.dot(relative.query);
        return Promise.all(previousState.map(async (prevs)=>{
            let singleQuery = {} as any;
            for (const [key, referedAs] of Object.entries(relativeMap)) {
                singleQuery[key.replace("[]","")] = prevs[referedAs as string];
            }         
            // find all relative documents based on match query of previous document
            let relativeModelDocuments = await relativeModel.find(
                {
                    ...dot.object(singleQuery)
                }
            );

        
            relativeModelDocuments.map((rmd:any)=>{
                for (const [key, referedAs] of Object.entries(relativeMap)) {
                    let currentValue = rmd[key.replace("[]","")]; 
                    let updatedItems;
                    let i = key.indexOf("[]")
                    if(i>0){
                        // Must be an array field
                        updatedItems = currentValue.map((el:any) => {
                            return el ===  prevs[referedAs as string] ? modifiedField[referedAs as string]  : el
                        });
                        rmd[key.replace("[]","")] = updatedItems;
                    }else{
                        dot.str(key, modifiedField[referedAs as string], rmd);
                    }
                    rmd.save()
                };         
            })




            // for (const [key, referedAs] of Object.entries(relativeMap)) {
            //     let value = prevs[referedAs as string];
            //     setQuery[key] = modifiedField[referedAs as string];
            //     singleQuery[key] =value
            // }            
            // return relativeModel.updateMany(
            //     {
            //         ...dot.object(singleQuery)
            //     },{
            //     $set:{
            //         ...setQuery
            //     } 
            // })
        }));
    }
}



async function updateSingleRelative(
    relativeModel:mongoose.Model<any>,
    singleQuery:any, 
    prevs:any,      
    modifiedField:any
    ){

    let relativeModelDocuments = await relativeModel.find(
        {
            ...dot.object(singleQuery)
        });
        console.log({modifiedField});
        relativeModelDocuments.map((rmd:any)=>{
            return rmd.save();

            // let prevsLikes = rmd.likes;
            // prevsLikes = prevsLikes.filter((plikes:string)=>{
            //     return plikes !== prevs.name
            // })
            // prevsLikes.push(modifiedField.name);
            // rmd.likes = prevsLikes;


            // return relativeModel.updateMany(
            // {
            //     ...dot.object(singleQuery)
            // },{
            // $set:{
            //     ...setQuery
            // }});


            // console.log(prevsLikes, prevs.name);
        })

}


const  getType = (currentValue:any):string =>{
    const typeofVal = require('type-of');
    return typeofVal(currentValue)
}