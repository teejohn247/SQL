import mysql from "mysql";
import express from "express";
import { json } from "body-parser";
import qbRoutes from "./routes/ailments";

const app = express();

app.use(json());

app.use(qbRoutes);

app.listen(4000);
