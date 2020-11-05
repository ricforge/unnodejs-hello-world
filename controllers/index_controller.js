const logger  = require('unnode').workerLogger
const unUtils = require('unnode').utils

class IndexController {
    constructor() {

    }

    index(customParameter, req, res) {
        // customParameter == "someParameter"

        const ip     = unUtils.getClientIp(req)
        const method = req.method
        const url    = unUtils.getRequestFullUrl(req)
        const agent  = req.get('user-agent')

        logger.log('info',
            `Request ${method} ${url} (from: ${ip}, `
            + `User-Agent: ${agent})`)

        res.send('Hello World!')
    }
}


module.exports = new IndexController()
