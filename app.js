const express = require("express") 
const app = express()
const bodyParser = require("body-parser")
const path = require("path")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, "public")))


app.set("view engine", "ejs")



app.get("/", (req,res)=>{
    res.render("inde")
})

const PORTA = 9090 
app.listen(PORTA, ()=>{
    console.log("Rodando successfull")
})