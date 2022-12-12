const {Router} = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const {NotesModel} = require("../model/Notes.model")  

const notesController = Router();

notesController.get("/" , async (req,res) => {
    const notes = await NotesModel.find({_id: req.body.userId})
    res.send(notes)
})
notesController.post("/create" , async (req,res) => {
    const {Heading,Note,Tag,userId}  = req.body;
    const notes = await new NotesModel({
        Heading,Note,Tag,userId
    })
    try {
        await notes.save()
        res.send("Notes Created")
    } catch (error) {
        res.send("something went wrong")
    }
})

module.exports = {
    notesController
}