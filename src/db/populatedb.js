#! /usr/bin/env node

import { Client } from "pg"
import "dotenv/config"

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text TEXT,
  added TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, text) 
VALUES
  ('wrzdx', 'Hi, there!');
`

const connectionString = `postgresql://${process.env.PG_USERNAME}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`

async function main() {
  console.log("seeding...")
  const client = new Client({
    connectionString,
  })
  await client.connect()
  await client.query(SQL)
  await client.end()
  console.log("done")
}

main()
