
const db = require('../data/dbConfig.js')
const games = require('./gamesModule.js')

describe('gamesModule ORM for "games" table', () => {
    describe('add()', () => {
        afterEach(async () => {
            await db.seed.run()
        })
        it('should add the provided game into "games" table and return data from the record of that game', async () => {
            let game = await games.add({name: 'Super Mario Bros.', genre: "Platformer"})
            expect(game.genre).toBe('Platformer')
            let game2 = await games.add({name: 'Minecraft', genre: 'Adventure'})
            expect(game2.name).toBe('Minecraft')
        })
        it('should add be able to consecutively insert records into "games" table', async () => {
            await games.add({name: 'Super Mario RPG: Legend of the Seven Stars', genre: 'RPG'})
            await games.add({name: 'Minecraft', genre: 'Adventure'})
            await games.add({name: 'Enter the Gungeon', genre: 'Shooter'})
            let gamesdb = await db('games')
            expect(gamesdb).toHaveLength(6)
        })
    })
    describe('get()', () => {
        it('should return an array that has the length equal to amount of records in "games" table', async () => {
            let getgames = await games.get()
            let gamesdb = await db('games')
            expect(getgames.length()).toEqual(gamesdb.length())
        }
    })
})