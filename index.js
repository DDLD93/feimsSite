const express = require("express")
require('./connection/dbConn')()
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5500



app.use(express.urlencoded({ extended: false }));
//intitializing body parser
app.use(express.json())

// connecting to database 

app.use("/api/site", require("./routes/routes"))


app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})