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
router.get('/dzo',async(req,res)=>{
	var result=await database.getdzongkhag();
	if(result.length===0){
		res.send("dzongkhag d=boundaries not found");
	}else{
		const boundaries=result.map((row)=>{
			let geojson=JSON.parse(row.st_asgeojson);
			return geojson;
		});
		console.log("sent the data");
		res.send(boundaries);

	}
});
module.exports=router;
