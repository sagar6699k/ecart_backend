import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: String, required: true },
        image: { type: String, required: true },
        rating: { type: String, required: true }
    },
    {
        versionKey: false,
        timestamps: true
    }
)


const Product = mongoose.model('products', productSchema);

export { Product };