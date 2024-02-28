import express from "express"; //const express = require('express');
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMidleware.js";
import connectDB from "./config/db.js";
import cookieParser from 'cookie-parser';
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);
app.get("/", (req, res) => res.send("API running"));
connectDB();
app.listen(port, () => console.log(`Server started on port ${port}`));
