
import * as jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";

const newToken = (user) => {
    return jwt.default.sign(user.toJSON(), "SECRET_KEY");
    console.log("JWT==>", jwt);
    console.log("user==>", user);
}

const registerUser = async (req, res) => {
    let user
    try {
        user = await User.findOne({ email: req.body.email })
        // if yes then we throw an error that email already exists
        if (user) return res.status(400).send({ message: "email is already exists." });

        // else we will create the user with the email and password
        // but before saving the password we need to hash it
        user = await User.create(req.body);

        // we will create a token
        const token = newToken(user)

        // we will send the token to the frontend
        return res.status(200).send({ user, token });

    } catch (error) {
        console.log("Error", error);
        return res.status(500).send({ message: "Sorry for inconvenience please try again later" });
    }
}

const loginUser = async (req, res) => {

    try {
        // First we will check if user with same email already exists
        let user = await User.findOne({ email: req.body.email });

        // if not exists we throw an error
        if (!user) return res.status(400).send({ message: "Please check your email" });

        // if it exists then we match the password
        let match = user.checkPassword(req.body.password);

        // if not match then we throw an error
        if (!match) return res.status(400).send({ message: "Please check your email and password" });

        // we will create a token
        const token = newToken(user)

        // we will send the token to the frontend
        return res.status(200).send({ user, token });

    } catch (err) {
        return res.status(500).send({ message: "Sorry for inconvenience please try again later" });
    }
}
const getAllUser = async (req, res) => {
    try {
        // First we will check if user with same email already exists
        let user = await User.find({}).exec();
        return res.status(200).send({ user });

    } catch (err) {
        console.log("Error==>", err);
        return res.status(500).send({ message: "Sorry for inconvenience please try again later" });
    }
}

export { registerUser, loginUser, getAllUser }