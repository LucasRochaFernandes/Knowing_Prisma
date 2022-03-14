import "reflect-metadata";
import "@shared/containers";

import express from "express";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

export { app };
