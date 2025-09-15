import express from "express";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.get("/",(req,res) =>{
    const date = new Date();
    const today_day = date.getDay();

    let today = "weekday";
    let adv = "it's time to work!";

    if (today_day === 0 || today_day === 6) {
        today = "weekend";
        adv = "it's time to have fun!";
    }

    res.render(__dirname + "/views/index.ejs",
         {day : today, advice: adv});
})

app.listen(port,() =>{
      console.log(`Listening on port ${port}`);
})
