const express = require("express");
require("./files/config.js");
const add = require("./files/add");
const cors = require("cors");
const { trusted } = require("mongoose");
const app = express();

app.use(express.json());
app.use(cors());

async function addData(d){
    let data = new add(d);
    const result = await data.save();
    // console.log(result);
};

app.post('/addData', function(req, res){
    addData(req.body);
    // res.send(req.body)
});

app.get('/showData',async function(req, res){
    
    let data = await add.find({Status: false});
    res.send(data)
});

app.get('/display',async function(req, res){
    
    let data = await add.find({Status: true});
    res.send(data)
});

app.delete('/deleteData/:id',async function(req, res){
    // res.send("hello")
    const dlt =await add.deleteOne({_id:req.params.id})
    res.send(dlt)
})

app.put('/update/:id', async (req, res) => {
    const upd = await add.updateOne({_id:req.params.id},
        {
            $set:{
                Status:req.body.Status
            }
        })
    res.send(upd)
})

app.listen('5000');