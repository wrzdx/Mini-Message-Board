import db from "../db/queries.js"

function formatDate(date) {
  const d = new Date(date)
  console.log(d)
  return d.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
}

const getMessages = async (req, res) => {
  const messages = await db.getMessages()
  res.render("index", { messages, formatDate })
}

const postMessage = async (req, res) => {
  const messageText = req.body.messageText || "Empty Message"
  const messageUser = req.body.messageUser || "Guest"
  await db.createMessage(messageUser, messageText)
  res.redirect("/")
}

export default { getMessages, postMessage }
