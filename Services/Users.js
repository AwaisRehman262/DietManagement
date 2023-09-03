import { userModel } from "../Models/userModel.js"
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"
const SECRET_KEY = "Juttisthekey"

export const getAllUsers = async (req, res) => {
    const users = await userModel.find().select("-password")
    res.status(200).send({ data: users })
}

export async function SignUp(req, res) {
    const { name, email, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ email: email })
    
        if (existingUser !== null) { return res.status(400).json({ message: "user already exists!" }) }

        const hashedPassword = await bcrypt.hash(password, 10)
    
        const result = await userModel.create({
            name: name,
            email: email,
            password: hashedPassword
        })
    
        const token = Jwt.sign({ email: result.email, id: result._id }, SECRET_KEY)
    
        res.status(201).json({ user: result, token: token })
    } catch (error) {
        console.log(JSON.stringify(error))
        res.status(500).json({message:"something went wrong"})
    }
}

export async function SignIn(req, res) {
    const {name, email, password} = req.body
    try {
        const existingUser = await userModel.findOne({ email: email })

        if (!existingUser) { return res.status(404).json({ message: "user not found" }) }

        const matchPassword = bcrypt.compare(password, existingUser.password)
        
        if (!matchPassword) return res.status(400).json({ message: "invalid credentials" })
        
        const token = Jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY)

        res.status(200).json({user:existingUser, token:token})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "something went wrong" })

    }
}

export const getUserById = async (req, res) => {
    const id = req.params.email
    const user = await userModel.findById(id)
    res.status(200).send({ data: user })
}

export const deleteUserById = async (req, res) => {
    const id = req.params.email
    const user = await userModel.findByIdAndRemove(id)
    const users = await userModel.find()
    res.status(200).send({ data: users })
}