import express from "express";
import connect from "./src/dbConfig/db.js";
import { userRouter } from "./src/routes/user.route.js";


const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
//routes
app.get("/", (req, res) => {
    res.send("Express on Vercel");
});
app.use("/", userRouter)


app.listen(PORT, async () => {
    connect()
    console.log(`Listening on the port:${PORT}`);
})

export { app };