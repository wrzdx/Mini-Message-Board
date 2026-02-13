import express from "express"
import { loadEnvFile } from "node:process"
loadEnvFile()

const app = express()

app.get("/", (req, res) => {
  res.send("It works!")
})

const PORT = process.env.PORT

app.listen(PORT, (error) => {
  if (error) {
    throw error
  }
  console.log(`You can access your site on http://localhost:${PORT}`)
})
