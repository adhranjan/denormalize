export function binder(fn:any,options:any) {   
    return function() {
        Array.prototype.push.apply(arguments, [options]);
        return fn.apply(this, arguments);
    };
}