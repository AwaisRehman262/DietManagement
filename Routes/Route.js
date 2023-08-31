import { Router } from "express"
import {SignUp} from "../Services/Users.js"

const RouterMan = Router()

RouterMan.get("/tiles")
RouterMan.post("/tiles")
RouterMan.delete("/tiles:id")

RouterMan.get("/signin")
RouterMan.post("/signUp", SignUp)
RouterMan.delete("/signin:id")

RouterMan.get("/Admins")

export default RouterMan