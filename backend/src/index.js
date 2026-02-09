import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import AuthRouter from "./routes/auth.route.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//  ROUTES
app.use("/api/auth", AuthRouter);


const PORT = process.env.PORT ||3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server", err);
    process.exit(1);
  }
};

startServer();
