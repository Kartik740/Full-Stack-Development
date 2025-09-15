import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("<h1>Hello world</h1>");
})

app.get("/contact",(req,res) => {
    res.send("<h2>Contract details</h2> <p>4589356889</p>")
})

app.get("/about",(req,res) => {
    res.send("<h2>About Me</h2> <p>Myself Kartik</p>")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})