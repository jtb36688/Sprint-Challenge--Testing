
const db = require('../data/dbConfig.js')
const games = require('./gamesModule.js')

describe('gamesModule', () => {
    describe('add()', () => {
        afterEach(async () => {
            await db.seed.run()
        })
        it('should add the provided game into the db', async () => {
            let game = await games.add({name: 'Super Mario Bros.', genre: "Platformer"})
            expect(game.genre).toBe('Platformer')
            let game2 = await games.add({name: 'Minecraft', genre: 'Adventure'})
            expect(game2.name).toBe('Minecraft')
        })
        it('should add the provided amount of games into the db', async () => {
            await games.add({name: 'Super Mario RPG: Legend of the Seven Stars', genre: 'RPG'})
            await games.add({name: 'Minecraft', genre: 'Adventure'})
            await games.add({name: 'Enter the Gungeon', genre: 'Shooter'})
            const gamesdb = await db('games')
            expect(gamesdb).toHaveLength(6)
        })
    })
})