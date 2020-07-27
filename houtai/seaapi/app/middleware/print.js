module.exports = (options, app) => {
    console.log(options.a);
    return async function print(ctx, next) {
        console.log(new Date());

        // ctx.state.csrf = ctx.csrf



        await next()

    }
}