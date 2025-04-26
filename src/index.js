import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

// configure env variables
dotenv.config({ path: "./.env" });

// Extract PORT number from env file
const PORT = process.env.PORT || 8080;

// MongoDB connection
connectDB()
  .then(() => {
    // when MongoDB is connected, then our server is start or run !
    app.listen(PORT, () => {
      console.log(`Server is running on :: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MongoDB Connection Error :: ${err}`);
  });
