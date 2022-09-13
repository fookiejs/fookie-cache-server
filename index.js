(async () => {
    const fookie = require("fookie");
    await fookie.init()
    await fookie.use(require("fookie-server"))
    await fookie.listen(2626)
})()