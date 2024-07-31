const pool = require("../db");

const getspecifictodo=async (req,res)=>{
  // first i get the todois from params
  const {todoid}=req.params;
  console.log(todoid)

  const getthetodo=await pool.query("SELECT * FROM todos WHERE todoid=$1 ",[todoid]);

  res.json(getthetodo.rows);


}

module.exports=getspecifictodo