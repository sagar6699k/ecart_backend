import { Product } from "../models/products.model.js";



const createProduct = async (req, res) => {
    let product
    try {
        product = await Product.create(req.body);

        // we will send the token to the frontend
        return res.status(200).send({ product});

    } catch (error) {
        console.log("Error", error);
        return res.status(500).send({ message: "Sorry for inconvenience please try again later" });
    }
}

const getAllProducts = async (req, res) => {
    try {
        // First we will check if user with same email already exists
        let product = await Product.find({}).exec();
        return res.status(200).send({ product });

    } catch (err) {
        console.log("Error==>", err);
        return res.status(500).send({ message: "Sorry for inconvenience please try again later" });
    }
}

export { getAllProducts, createProduct  }