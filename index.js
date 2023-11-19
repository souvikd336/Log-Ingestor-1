const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const morgan = require('morgan')
const services = require("./render.js")
require("dotenv").config();
//temp check
app.set("view engine", "ejs");


//parse request to body-parser
app.use(bodyParser.urlencoded({extended:true}))

//morgan middleware
app.use(morgan("tiny"));


//load assets
app.use('/css', express.static(path.resolve(__dirname,"assets/css")))
app.use('/js', express.static(path.resolve(__dirname,"assets/js")))
//import all routes here
const sendlog = require("./routes/sendlog.js")
const getdata = require("./routes/getlog.js");




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/*app.get("/", (req, res) =>{
    res.render('index.ejs');
})*/

app.use("/",getdata);
app.use("/", sendlog);
app.listen(process.env.PORT, () => {
    console.log(`Server is running at port: ${process.env.PORT}`);
})