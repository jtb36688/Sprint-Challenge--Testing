
const db = require('../data/dbConfig.js')
const games = require('./gamesModule.js')

describe('gamesModule', () => {
    describe('insert()', () => {
        afterEach(async () => {
            await db('games').truncate()
        })
        it('should insert the provided game into the db', async () => {
            let game = await games.insert({name: 'sam'})
            expect(game.name).toBe('sam')
            game = await games.insert({name: 'Minecraft'})
            expect(game.name).toBe('Minecraft')
        })
        it('should insert the provided amount of games into the db', async () => {
            await games.insert({name: 'Super Mario RPG: Legend of the Seven Stars'})
            await games.insert({name: 'Minecraft'})
            await games.insert({name: 'Enter the Gungeon'})
            const gamesdb = await db('games')
            expect(gamesdb).toHaveLength(3)
        })
    })
})