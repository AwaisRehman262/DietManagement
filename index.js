import express, { json } from "express";

import { connectDataBase } from "./Helpers/ConnectDb.js";
import RouterMan from "./Routes/Route.js";
const app = express()
const port = 2602

app.use(json())
app.use(express.json())



connectDataBase()

app.use("/api", RouterMan)



app.get("/", (request, response) => {
  response.send("test")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})