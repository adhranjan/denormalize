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
    schema.post(['update'], (docs:any,d:any, a:any) =>{
        // TODO: Trigger a rammit Mq
        // TODO: Update Another Document via query
        // TODO: Inject Message Queue, which ever user wants
    });

}