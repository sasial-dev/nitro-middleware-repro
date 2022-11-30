
export default eventHandler(async (event) => {
    // check if route actually requires auth:
    // https://github.com/unjs/nitro/discussions/714
	if (!event.node.req.url.includes("/test")) return;

    const param = getRouterParam(event, "scope");
    const params = getRouterParams(event)

    console.log(`PARAM: ${param}\nPARAMS: ${JSON.stringify(params, null, 2)}`)

    throw createError({
        statusCode: 500,
        message: `PARAM: ${param}\nPARAMS: ${JSON.stringify(params, null, 2)}`
    })
});

