import express from "express";
import cors from "cors";
import connect from "./src/dbConfig/db.js";
import { userRouter } from "./src/routes/user.route.js";
import { productRouter } from "./src/routes/product.route.js";


const app = express();
const PORT = process.env.PORT || 4000;
var corsOptions = {
    origin: ["http://localhost:3000", "https://ecart-frontend.vercel.app"],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.use(cors(corsOptions));
app.use(express.json());


//routes
app.get("/", (req, res) => {
    res.send("Welcome to Express App");
});
app.use("/", userRouter)
app.use("/", productRouter)


app.listen(PORT, "0.0.0.0", async () => {
    connect()
    console.log(`Listening on the port:${PORT}`);
})

export { app };