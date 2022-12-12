const mongoose = require("mongoose")

const notesSchema = mongoose.Schema({
    Heading: { type : String , required : true },
    Note: { type : String , required : true },
    Tag: { type : String , required : true }
})

const NotesModel = mongoose.model( "notes" , notesSchema )

module.exports = {
    NotesModel
}