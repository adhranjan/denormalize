import { Operator } from "./operator";
import { RelativeModel } from "../../interface/relation";

export class Operation{
    constructor(private operator:Operator){

    }
    async execute(modifiedField:any, relative:RelativeModel, previousState:any[]){
        return this.operator.operate(modifiedField,relative, previousState);
    }
}