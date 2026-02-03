import express from "express";
import cors from "cors";
import { sequelize } from "./db/db.js";
import { userExists, insertArow } from "./controllers/userTable_operations.js";

const app = express();
app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);


app.post("/registration", async (req, res) => {
  const { name, email } = req.body;

  try {
    const exists = await userExists(name, email);

    if (exists) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    await insertArow(name, email);

    return res.status(201).json({
      message: "User created successfully",
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
});


app.listen(3000, async () => {
  console.log("Server is running");
  try {
    await sequelize.authenticate();
    console.log("Database is connected");
  } catch (e) {
    console.log("Unable to connect database");
  }
});
