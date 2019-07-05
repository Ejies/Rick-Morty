import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
    connectionString: connectionString
});

pool
    .connect()
    .then(()=> console.log('Postgres connected'));

export default pool;