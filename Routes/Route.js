import { Router } from "express"
import {SignIn, SignUp} from "../Services/Users.js"

const RouterMan = Router()

RouterMan.get("/tiles")
RouterMan.post("/tiles")
RouterMan.delete("/tiles:id")

RouterMan.post("/signIn",SignIn)
RouterMan.post("/signUp", SignUp)
RouterMan.delete("/signin:id")

RouterMan.get("/Admins")

export default RouterMan