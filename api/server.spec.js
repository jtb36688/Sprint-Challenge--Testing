const request = require("supertest");

const server = require("./server.js");

const db = require("../data/dbConfig.js");

describe("server.js", () => {
  it("should be associated with the testing object in knexfile", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});
describe("POST /", () => {
  afterEach(async () => {
    await db.seed.run()
})
  it("should return a status code of 201 on successful POST", async () => {
    const res = await request(server)
      .post("/api")
      .send({ name: "MTG Arena", genre: "Board/Card" });
    expect(res.status).toBe(201);
  });
  it("should return JSON", async () => {
    const res = await request(server)
      .post("/api")
      .send({ name: "MTG Arena", genre: "Board/Card" });
    expect(res.type).toBe("application/json");
  });
  it("should return a status code of 422 on invalid request body (not containing name or genre value)", async () => {
    const res = await request(server)
      .post("/api")
      .send({ name: "MTG Arena"});
    expect(res.status).toBe(422);
    const res2 = await request(server)
    .post("/api")
    .send({ genre: "Board/Card"});
    expect(res2.status).toBe(422);
  })
  it("should return a status code of 405 when trying to add a title that is not unique amongst records", async () => {
    const res = await request(server)
    .post("/api")
    .send({name: 'Metroid', genre: "Adventure"})
    expect(res.status).toBe(405);
  })
});
describe("GET /", () => {
  it("should return a status code of 200 on successful GET", async () => {
    const res = await request(server).get("/api")
    expect(res.status).toBe(200)
  })
  it("should return an array", async () => {
    const res = await request(server).get("/api")
    expect(Array.isArray(res.body)).toBeTruthy();
  })
  it("should return an array containing each database record", async () => {
    const res = await request(server).get("/api")
    const dbget = await db('games')
    expect(res.body).toHaveLength(dbget.length)
  })
})