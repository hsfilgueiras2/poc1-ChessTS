import { Player } from "./protocols.js";
import { connection } from "./db.js";

async function getAll() {
  const result = await connection.query(`SELECT * FROM players`);;
  return result.rows;
}

async function getPlayerByRank() {
  const result = await connection.query(`
    SELECT rank, COUNT(rank) AS "rankCount" FROM players
    GROUP BY rank
  `);;
  return result.rows;
}

async function postPlayer(player: Player) {
  const { name, rank, points } = player;
  const result = await connection.query(`
    INSERT INTO players (name, rank, points) VALUES ($1, $2, $3)
  `, [name, rank, points]);;
  const status = result.rowCount ? 201 : 400;
  return status;
}

async function updatePlayerById(points: number, id: number) {
  console.log(points)
  console.log(id)
  console.log("CHEGOU AQUI1")
  const result = await connection.query(`
    UPDATE players SET points = $1 WHERE id=$2
  `, [points, id]);
  console.log("CHEGOU AQUI")
  const status = result.rowCount ? 200 : 400;
  return status;
}

async function deletePlayerById(id: number) {
  const result = await connection.query(`
    DELETE FROM players WHERE id=$1
  `, [id]);
  const status = result.rowCount ? 204 : 400;
  return status;
}


export const services = {
  getAll,
  getPlayerByRank,
  postPlayer,
  updatePlayerById,
  deletePlayerById
};