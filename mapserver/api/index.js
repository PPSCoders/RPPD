const express=require('express');
require('dotenv').config();
var app=express();
var api=require('./routes');
var database= require('./database');

app.use(api);
app.listen(3000,()=>{
	console.log(`server started on port 3000`);
});


