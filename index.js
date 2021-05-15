const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/presentation',function(req,res){
    res.sendFile(path.join(__dirname+'/presentation.html'));
});

router.get('/projet',function(req,res){
    res.sendFile(path.join(__dirname+'/projet.html'));
});
router.get('/compétences',function(req,res){
    res.sendFile(path.join(__dirname+'/competences.html'));
});
router.get('/cv',function(req,res){
    res.sendFile(path.join(__dirname+'/cv.html'));
});
router.get('/activites',function(req,res){
    res.sendFile(path.join(__dirname+'/activites.html'));
});
router.get('/portfolio',function(req,res){
    res.sendFile(path.join(__dirname+'/portfolio.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 5000);
