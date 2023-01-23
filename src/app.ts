import express, { json } from 'express';
import cors from 'cors';
import { playersRouter } from './playersRouter.js';


const app = express();
app.use(cors())
app.use(json())
app.get("/health", (req, res) => res.send("OK!"))
app.use("/players", playersRouter)


app.listen(4000, ()=>console.log("server running"))