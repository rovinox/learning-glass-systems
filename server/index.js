require("dotenv").config()
const NodeMailer = require("./NodeMailer")
const express = require("express")
const path = require('path');
const app = express()
app.use(express.json())
app.use( express.static( `${__dirname}/../build` ) );

const {SERVER_PORT} = process.env



app.post("/api/email", NodeMailer.addContactForm)



app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(SERVER_PORT, ()=> console.log(`linting on ${SERVER_PORT}`))