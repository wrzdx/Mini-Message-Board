import { Router } from "express"
import messagesController from "../controllers/messagesController.js"

const router = Router()

router.get("/", messagesController.getMessages)

router.post("/new", messagesController.postMessage)

export default router
