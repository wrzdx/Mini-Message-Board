import express from "express"

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
]

const links = [
  { href: "/", text: "Messages" },
  { href: "/new", text: "New Message" },
]

const router = express.Router()

router.get("/", (req, res) => {
  res.render("index", { messages })
})

router.post("/new", (req, res) => {
  const messageText = req.body.messageText || ""
  const messageUser = req.body.messageUser || "Guest"
  messages.push({ text: messageText, user: messageUser, added: new Date() })
  res.render("index", { messages })
})

export default router
