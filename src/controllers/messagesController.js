import db from "../db/queries.js"
import { body, validationResult, matchedData } from "express-validator"

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

const validateMessage = [
  body("messageText").trim().notEmpty().withMessage("Message text cannot be empty"),
  body("messageUser").trim().notEmpty().withMessage("Message user cannot be empty"),
]

const getMessages = async (req, res) => {
  const messages = await db.getMessages()
  res.render("index", { messages, formatDate })
}

const postMessage = [
  validateMessage,
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const messages = await db.getMessages()
      console.log(errors.array())
      return res.render("index", {
        messages,
        formatDate,
        errors: errors.array(),
      })
    }
    const { messageText, messageUser } = matchedData(req)
    await db.createMessage(messageUser, messageText)
    res.redirect("/")
  },
]

export default { getMessages, postMessage }
