import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import {fileURLToPath} from "url";


const app = express();

dotenv.config({path:"config.env"});

const PORT = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(morgan("tiny"));

app.set("view engine", "ejs");

app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

app.get("/",(req, res) =>{
    res.render("index");
})

app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`);
}) 