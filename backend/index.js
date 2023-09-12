const express = require("express");
require("./files/config.js");
const add = require("./files/add");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

async function addData(d){
    let data = new add(d);
    const result = await data.save();
    console.log(result);
};

app.post('/addData', function(req, res){
    addData(req.body);
    res.send(req.body)
});

app.get('/showData',async function(req, res){
    
    let data = await add.find();
    res.send(data)
});


app.listen('5000');