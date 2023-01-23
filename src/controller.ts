import { Request, Response } from "express";
import { services } from "./services.js";


async function getPlayers(req: Request, res: Response){
    try{
        const players = await services.getAll();
        res.send(players);
    }catch(err){res.sendStatus(500)}
}
async function getPlayersByRank(req: Request, res: Response){
    try{
        const players = await services.getPlayerByRank();
        res.send(players)
    }catch(err){res.sendStatus(500)}
}
async function postPlayer(req: Request, res: Response){
    try{
        const statusPost = await services.postPlayer(req.body);
        res.sendStatus(statusPost);
    }catch(err){res.sendStatus(500)}
}
async function updatePlayer(req: Request, res: Response){
    const { id } = req.params;
    try{
        const statusUpdate = await services.updatePlayerById(req.body.points, Number(id));
        res.sendStatus(statusUpdate);
    }catch(err){res.sendStatus(500)}
}
async function deletePlayer(req: Request, res: Response){
    const { id } = req.params;
    try{
        const statusDelete = await services.deletePlayerById(Number(id));
        res.sendStatus(statusDelete);
    }catch(err){res.sendStatus(500)}
}

export{ getPlayers, getPlayersByRank, postPlayer, updatePlayer, deletePlayer}
