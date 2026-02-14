import "dotenv/config"
import { Pool } from "pg"

const connectionString = `postgresql://${process.env.PG_USERNAME}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`
const pool = new Pool({ connectionString })

export default pool
