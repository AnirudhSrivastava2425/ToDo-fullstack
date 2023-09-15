const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    Title:String,
    Description:String,
    Status:Boolean
});

module.exports = mongoose.model('todos', schema);