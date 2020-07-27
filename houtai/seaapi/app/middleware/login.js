module.exports = (options, app) => {
  
    return async function print(ctx, next) {
        var iip='127.0.0.2'

        console.log(ctx.request.ip);
        if(iip==ctx.request.ip){
            ctx.status=403
            ctx.body='拉黑了'
        }else{
                await next()
        }
        

    

    }
}