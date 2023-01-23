import pg from 'pg';
var Pool = pg.Pool;
export var connection = new Pool({
    connectionString: "postgresql://postgres:root@localhost:5432/chesspoc"
});
