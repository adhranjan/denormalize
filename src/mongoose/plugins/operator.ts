import { Relative } from "../../interface/relative";

export abstract class Operator{
    abstract async:boolean;
    protected abstract doing(modifiedField:any, relative:Relative):void;

    do(modifiedField:any, relative:Relative):void{
        return this.doing(modifiedField, relative);
    }

    async asyncdo(modifiedField:any, relative:Relative):Promise<void>{
        return await this.doing(modifiedField, relative);
    };
}


export class RabbitMqExecution extends Operator{
    // ExeutionType.RABBITMQ 
    async = false;

    doing(modifiedField:any, relative:Relative){

    }
}

export class NodeJsProcess extends Operator{
    // ExeutionType.NODEJSPROCESS
    async = false;
    constructor(async:boolean){
        super();
        this.async = async;
    }
    doing(modifiedField:any, relative:Relative){
        console.log(modifiedField, relative);
    }
}