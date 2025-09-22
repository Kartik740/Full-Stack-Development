import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res) =>{
    res.render("index");
})

app.post("/search", async (req,res) =>{
    try {
    const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.location}&appid=dec586c56d0b8b61525fff966b07865d&units=metric`);
    console.log(weather.data);
    const icon = weather.data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    res.render("index", { icon : iconUrl , data : weather.data });
  } catch (error) {

    console.log(JSON.stringify(error.response.data));
    res.render("index.ejs", { content: error.response.data.message });
  }
})

app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})