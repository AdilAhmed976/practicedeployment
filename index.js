const express= require("express")
require("dotenv").config()

const {userController} = require("./routes/User.routes") 
const {notesController} = require("./routes/Notes.routes") 
const {connection} = require("./config/db")
const { authentication } = require("./middlewares/authentication")
const app = express()

app.use(express.json())

const PORT = process.env.PORT || 8080

app.get("/" , (req,res) => {
    res.send("HOME PAGE")
})

app.use("/user" , userController)
app.use(authentication)
app.use("/notes" , notesController) 

app.listen(PORT , async() => {
    try {
        await connection;
        console.log(`connected to DB of PORT - ${PORT}`)
    } 
    catch (error) {
        console.log(error)
    }
    console.log(`Listening to Port : ${PORT}`)
})