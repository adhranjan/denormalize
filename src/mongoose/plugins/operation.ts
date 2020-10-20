import { Operator } from "./operator";
import { Relative } from "../../interface/relative";

export class Operation{
    constructor(private operator:Operator){

    }
    async execute(modifiedField:any, relative:Relative){
        if(this.operator.async){
            return this.operator.asyncdo(modifiedField,relative);
        }else{
            return await this.operator.do(modifiedField,relative);
        }
    }
}