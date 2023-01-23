import pg from 'pg';
const { Pool } = pg;
export const connection = new Pool({
  connectionString: "postgresql://postgres:root@localhost:5432/chesspoc",
});