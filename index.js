const express = require('express');

const path = require('path');
const PORT = process.env.PORT || 5000;

express()
.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
})
.get('/presentation',function(req,res){
    res.sendFile(path.join(__dirname+'/presentation.html'));
})
.get('/cv',function(req,res){
    res.sendFile(path.join(__dirname+'/cv.html'));
})
.get('/portfolio',function(req,res){
    res.sendFile(path.join(__dirname+'/portfolio.html'));
})
.listen(PORT, () => console.log(`Listening on ${ PORT }`));
