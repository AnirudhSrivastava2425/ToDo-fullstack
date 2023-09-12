const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    Title:String,
    Description:String,
});

module.exports = mongoose.model('todos', schema);