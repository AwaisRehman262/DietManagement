import { userModel } from "../Models/userModel.js"

export const getAllUsers = async (req, res) => {
    const users = await userModel.find().select("-password")
    res.status(200).send({ data: users })
}

export async function SignUp(req, res) {
    const body = req.body;
    const user = new userModel(body);
    await user.save();
    res.status(201).send({ message: "UserModel Added Successfully" });
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