const path = require('path')

module.exports = [
    {
        'vhost': [ '*' ],
        'routes': [
            {
                method: 'GET',
                path: '/',
                controller: 'index_controller#index',
                customParameter: 'someParameter'
            }
        ]
    }
]