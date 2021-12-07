import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";

const app = express();

app.use(bodyParser.json());

app.post("/api/send-request", async (req, res) => {
  try {
    const { name, email } = req.body;

    //Email "usedemail@airwallex.com" is hardcoded in the backend
    //to trigger a specific error that needs to be handled by the front-end app.
    if (email === "usedemail@airwallex.com") {
      res
        .status(400)
        .json({ errorMessage: "Bad Request: Email is already in use" });
      return;
    }

    const client = await MongoClient.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
    });
    const db = client.db("broccoli");

    await db.collection("requests").insertOne({ name: name, email: email });

    res.status(200).json("Registered");

    client.close();
  } catch (error) {
    res.status(500).json({ message: "Error connecting to db", error });
  }
});

app.listen(8000, () => console.log("Listening on port 8000"));
