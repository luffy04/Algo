const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs=require('fs');

const database=require("./database");
const http=require('http');
const server=http.Server(app);

app.use(bodyParser.json({ limit: '10mb'}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());

app.get("/",(req,res)=>{
  res.send("Hello");
})

app.post("/send",(req,res)=>{
  database.send(req.body.data,(data)=>{
    res.send(data);
  })
})

app.get("/getContact",(req,res)=>{
  database.getContact(data=>{
    res.send(data);
  })
})

const port =process.env.PORT ||  5000;

server.listen(port, '192.168.0.106',() => `Server running on port ${port}`);
