import { connect } from "mongoose"

let Mongodb_uri = "mongodb+srv://aw2946652dietmanagement:UhQi3oE8i9xH4QpB@backend.krwbcv4.mongodb.net/?retryWrites=true&w=majority"

export const connectDataBase = async () => {
    try {
        await connect(Mongodb_uri)
        console.log("DB Connected")
    } catch (e) {
        console.log(e)
    }
}