export function binder(fn:any,options:any) {   
    return function() {
        Array.prototype.push.apply(arguments, [options]);
        fn.apply(this, arguments);
        return;
    };
}