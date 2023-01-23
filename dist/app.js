import express, { json } from 'express';
import cors from 'cors';
import { playersRouter } from './playersRouter.js';
var app = express();
app.use(cors());
app.use(json());
app.get("/health", function (req, res) { return res.send("OK!"); });
app.use("/players", playersRouter);
app.listen(4000, function () { return console.log("server running"); });
