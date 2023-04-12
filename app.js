const express = require('express');
const fs = require('fs');

const app = express();

const port = 3500;

app.post('/create-file',(req,res)=>{
    
    fs.writeFile('date-time.txt',Date(),(err)=>{
         if(err){
            res.status(500);
            return res.send({
                message:"Error"})
         }
    })

    res.status(200);
    return res.send({
        message:"file created!"
    })
 

});

 app.get('/read-file',(req,res)=>{
    
    fs.readFile('date-time.txt','utf-8',(err,data)=>{
         if(err){
            res.status(500);
            return res.send({
                message:"Error"})
         }
    

    res.status(200);
    return res.send(data)
 })

});

app.listen(port,()=>{
    console.log("App listening",port)
})