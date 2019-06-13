const pg=require('pg');
const connectionString=process.env.DATABASE_URL;

const client=new pg.Client({connectionString});
try{
	client.connect().then(()=>{
		console.log(`connected to ${client.database} at ${client.host}`);
	});
}catch(error){
	console.log(error);
}
module.exports={
	queryTime: async()=>{
		const result=await client.query('select NOW() as now');
		return result.rows[0];
	},
	getdzongkhag: async()=>{
		const locationquery=`select name, ST_AsGeoJSON(geom) from bhutan_simplified;`;
		const result=await client.query(locationquery);
		return result.rows;
	}
}
