const express =require ("express")
const path = require("path")
const app = express()
const port = process.env.PORT || 5001;
require("./db/conn")

const static_path = path.join(__dirname, "../public")

app.use(express.static("src"));
app.use(express.static(static_path ));
app.set("view engine","hbs")

app.get("/",(req,res)=>{
    res.render("index")
})
app.listen(port, ()=>{
    console.log('server is running at desired port')
})