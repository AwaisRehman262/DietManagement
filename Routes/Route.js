import { Router } from "express"

const RouterMan = Router()

RouterMan.get("/tiles")
RouterMan.post("/tiles")
RouterMan.delete("/tiles:id")

RouterMan.get("/signin")
RouterMan.post("/signup")
RouterMan.delete("/signin:id")

RouterMan.get("/Admins")

export default RouterMan