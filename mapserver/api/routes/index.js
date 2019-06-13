var express=require('express');
var router=express.Router();
var database=require('../database');

router.get('/',function(req,res){
    res.send('hello');
});
router.get('/time',async (req,res)=>{
	const result=await database.queryTime();
	res.send(result);
});
router.get('/location',async(req,res)=>{
	const result=await database.getdzongkhag();
	res.send(result);
});
module.exports=router;
