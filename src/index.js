import express from "express";
import connect from "./dbConfig/db.js";
import { userRouter } from "./routes/user.route.js";


const app = express();
const PORT = 4000;
app.use(express.json());
//routes
app.use("/api", userRouter)


app.listen(PORT, async () => {
    connect()
    console.log(`Listening on the port:${PORT}`);
})