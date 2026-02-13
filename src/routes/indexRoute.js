import express from "express"

function formatDate(date) {
  const d = typeof date === "string" ? new Date(date) : date;

  return d.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: formatDate(new Date()),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: formatDate(new Date()),
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
  const messageText = req.body.messageText || "Empty Message"
  const messageUser = req.body.messageUser || "Guest"
  messages.push({ text: messageText, user: messageUser, added: formatDate(new Date()) })
  res.redirect("/")
})

export default router
