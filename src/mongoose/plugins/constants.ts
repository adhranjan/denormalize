export enum ActionTiming {
    PRE = 'pre',
    POST = 'post'
}

export enum UpdateMethods {
    FINEONEANDUPDATE =  "findOneAndUpdate",
    UPDATE =  "update",
    UPDATEONE =  "updateOne",
    UDPATEMANY =  "updateMany",
}

export enum ExeutionType{
    RABBITMQ = 'rmq',
    NODEJSPROCESS = 'samethread',
}