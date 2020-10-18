// module.exports = function loadedAtPlugin(schema, options) {
//     // schema.virtual('loadedAt').
//     //   get(function() { return this._loadedAt; }).
//     //   set(function(v) { this._loadedAt = v; });
  
//     // schema.post(['find', 'findOne'], function(docs) {
//     //   if (!Array.isArray(docs)) {
//     //     docs = [docs];
//     //   }
//     //   const now = new Date();
//     //   for (const doc of docs) {
//     //     doc.loadedAt = now;
//     //   }
//     // });
//   };
  

export const updated = (schema:any, options:any)=>{
    // schema.virtual('updated').
    //   get(function() { return updated; }).
    //   set(function(v:any) { updated = v; });
  
    schema.post(['update'], function(next:Function, doc:any) {
        // console.log("BEFORE:", origDocument)
        console.log("AFTER:", this.toJSON().attrCache.Description)

        // console.log({original} )
        // console.log({a:        this.toJSON()        })
        next();
        // console.log(this);
    //   if (!Array.isArray(docs)) {
    //     docs = [docs];
    //   }
    //   const now = new Date();
    //   for (const doc of docs) {
    //     doc.loadedAt = now;
    //   }
    });

}