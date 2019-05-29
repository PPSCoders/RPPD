const Redis = require('ioredis');
const redis = new Redis(process.env.REDIS_PORT, process.env.REDIS_HOST);
import Util from '../utils/Utils';

const util=new Util();


// module.exports = {
//   /** Koa middleware function to check cache before continuing to any endpoint handlers */
//   async checkResponseCache (ctx, next) {
//     const cachedResponse = await redis.get(ctx.path)
//     if (cachedResponse) { // If cache hit
//       ctx.body = JSON.parse(cachedResponse) // return the cached response
//     } else {
//       await next() // only continue if result not in cache
//     }
//   },
//   /** Koa middleware function to insert response into cache */
//   async addResponseToCache (ctx, next) {
//     await next() // Wait until other handlers have finished
//     if (ctx.body && ctx.status === 200) { // If request was successful
//       // Cache the response
//       await redis.set(ctx.path, JSON.stringify(ctx.body))
//     }
//   }
// }

module.exports = {
  /** Koa middleware function to check cache before continuing to any endpoint handlers */
  async checkResponseCache (req,res, next) {
    console.log('checkResponseCache');
    const cachedResponse = await redis.get(req.originalUrl);
    if(cachedResponse){
      util.setSuccess(200,'Pests Retrieved from cache',JSON.parse(cachedResponse));
      util.send(res);
    }else{
      next();
    }
  },
  /** Koa middleware function to insert response into cache */
  async addResponseToCache (req,res, next) {
    // console.log(JSON.stringify(req.data));
    if(req.data){
      var tocache=req.data;
      await redis.set(req.originalUrl,JSON.stringify(req.data));
    }
  }
}

// module.exports = {
//   async checkResponseCache (key) {
//     const cachedResponse = await redis.get(key)
//     if (cachedResponse) { // If cache hit
//       return checkResponseCache; // return the cached response
//     } else {
//       return null;
//     }
//   },
//   /** Koa middleware function to insert response into cache */
//   async addResponseToCache (key,value) {
//       // Cache the response
//       return await redis.set(key, JSON.stringify(value));
//     }
// }
