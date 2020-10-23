import { Operator } from "./operator";
import { Relative } from "../../interface/relative";

export class Operation{
    constructor(private operator:Operator){

    }
    async execute(modifiedField:any, relative:Relative){
            return this.operator.operate(modifiedField,relative);
    }
}