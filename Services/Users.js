import { UserModel } from "../Models/Users.js"

export const getAllUsers = async (req, res) => {
    const users = await UserModel.find().select("-password")
    res.status(200).send({ data: users })
}

export const createUser = async (req, res) => {
    const body = req.body
    const user = new UserModel(body)
    await user.save()
    res.status(201).send({ message: "UserModel Added Successfully" })
}

export const getUserById = async (req, res) => {
    const id = req.params.email
    const user = await UserModel.findById(id)
    res.status(200).send({ data: user })
}

export const deleteUserById = async (req, res) => {
    const id = req.params.email
    const user = await UserModel.findByIdAndRemove(id)
    const users = await UserModel.find()
    res.status(200).send({ data: users })
}