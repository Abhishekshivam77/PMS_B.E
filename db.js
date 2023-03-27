const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://abhishek:abhishek@cluster0.cqi9wum.mongodb.net/PMSdata?retryWrites=true&w=majority")

module.exports = {
    connection
}