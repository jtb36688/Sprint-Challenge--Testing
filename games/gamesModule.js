const db = require('../data/dbConfig.js')

module.exports = {
    add,
    get,
    getByTitle,
    // remove,
    // modify
}

async function add(request) {
    const [id] = await db('games').insert(request)
    return db('games').where({id}).first();
}

function get() {
    return db('games')
}

function getByTitle(title) {
    return db('games').where({ name: title })
}