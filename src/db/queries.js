import pool from "./pool.js"

async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages;")
  return rows
}

async function createMessage(user, text) {
  const query = "INSERT INTO messages (username, text) VALUES ($1, $2);"
  await pool.query(query, [user, text])
}

export default { getMessages, createMessage }
