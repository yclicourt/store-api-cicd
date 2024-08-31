import app from "../app";
import request from "supertest";

const api = request(app);

describe("GET /products", () => {
  test("should respond with a 200 status code", async () => {
    const response = await api.get("/api/v1/products").send();
    expect(response.statusCode).toBe(200);
  });

  test("should respond with an array", async () => {
    const response = await request(app).get("/api/v1/products").send();
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe("POST /products", () => {
 
  // should respond with a 200 status code
  test("should respond with a 200 status code", async () => {
    const response = await request(app).post("/api/v1/products").send({
    title:"test title",
    description:"test description",
    price:1000,
    categoryId:1,
    images:"http://test.com"
    });
    expect(response.statusCode).toBe(200);
  });

  // should respond with a content of application/json
  test("should have a content-type: application in header", async () => {
    const response = await request(app).post("/api/v1/products").send();
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });

});
