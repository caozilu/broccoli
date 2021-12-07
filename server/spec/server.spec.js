const request = require("supertest");

describe("get a specific error", () => {
  it("should return a 400 Bad Request error", (done) => {
    request("http://localhost:8000/")
      .post("api/send-request")
      .send({ name: "test", email: "usedemail@airwallex.com" })
      .set("Accept", "application/json")
      .expect(400)
      .end((err, res) => {
        expect(res.body.errorMessage).toBe(
          "Bad Request: Email is already in use"
        );
        if (err) return done(err);
        return done();
      });
  });
});
