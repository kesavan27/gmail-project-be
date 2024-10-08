import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import mongoConnect from "./db-utils/mongoConnect.js";
import registerRouter from "./routes/register.js";
import loginRouter from "./routes/login.js";
import forgotPassRouter from "./routes/forgotPassword.js";
import resetPassRouter from "./routes/resetPassword.js";
import emailRouter from "./routes/email.js";

dotenv.config();

const server = express();
const port = process.env.PORT || "";

server.use(express.json());

server.use(cors());

mongoConnect();

server.use("/register", registerRouter);
server.use("/login", loginRouter);
server.use("/forgot-password", forgotPassRouter);
server.use("/reset-password", resetPassRouter);
server.use("/emails", emailRouter);

server.listen(port, () => {
  console.log(`${Date().toString()} - server listening on port ${port}`);
});