const db = require('../data/dbConfig.js')

module.exports = {
    add,
    // get,
    // getById,
    // remove,
    // modify
}

function add( request) {
    return db('games').insert(request)
}

