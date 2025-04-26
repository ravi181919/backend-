import express from "express";
import cors from "cors";
const app = express();

// a middleware for allow origin 
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// common express midddleware
app.use(express.json({ limit: "16kb" })); // limit increase as your requirement
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // handle url spaces and more url things, limit increase as your requirement
app.use(express.static("public")); // handle all css, js , images

export { app };
