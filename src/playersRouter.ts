import { Router } from "express";
import { postPlayer,updatePlayer,deletePlayer,getPlayers, getPlayersByRank } from "./controller.js";

const playersRouter = Router();

playersRouter
    .get("/", getPlayers)
    .get("/ranks", getPlayersByRank)
    .post("/",postPlayer)
    .patch("/:id", updatePlayer)
    .delete("/:id", deletePlayer);

export { playersRouter }