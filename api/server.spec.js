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
  it("should return a status code of 201 on POST", async () => {
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
});

