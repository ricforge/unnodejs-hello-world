require('dotenv').config({ path: `${__dirname}/.env` })

const unnode = require('unnode')

if (unnode.isMaster) {
    const unnodeMaster = require('unnode').master
    const masterLogger = require('unnode').masterLogger

    unnodeMaster.init(__dirname)
        .catch(error => {
            masterLogger.safeError('emerg',
                'UnnodeMaster.init() failed', error)
        })
} else if (unnode.isWorker) {
    const unnodeWorker = require('unnode').worker
    const workerLogger = require('unnode').workerLogger

    try {
        unnodeWorker.setupServer(__dirname)
            .catch((error) => {
                workerLogger.safeError('emerg',
                    'UnnodeWorker.setupServer() failed',
                    error)
            })
        unnodeWorker.runServer()
    } catch (error) {
        workerLogger.safeError('error',
            'Worker failed to start', error)
        process.exit(0)
    }
}