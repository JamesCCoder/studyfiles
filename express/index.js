import express from "express";
import path from "path";

import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, "public/main.html"));
})

app.all("*", (req, res) => {
    res.send("404 not found");
})

app.listen(PORT, () => {
    console.log(`The server is running on port: ${PORT}`);
})